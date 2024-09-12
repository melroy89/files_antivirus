<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2020 Robin Appelman <robin@icewind.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Files_Antivirus\Scanner;

use OCA\Files_Antivirus\AppConfig;
use OCA\Files_Antivirus\ICAP\ICAPClient;
use OCA\Files_Antivirus\ICAP\ICAPRequest;
use OCA\Files_Antivirus\ICAP\ICAPTlsClient;
use OCA\Files_Antivirus\Status;
use OCA\Files_Antivirus\StatusFactory;
use OCP\ICertificateManager;
use Psr\Log\LoggerInterface;

class SymantecICAP extends ScannerBase {
        /** @var ICAPClient::MODE_REQ_MOD|ICAPClient::MODE_RESP_MOD */
        private string $mode;
        private ICAPClient $icapClient;
        private ?ICAPRequest $icapRequest;
        private string $service;
        private string $virusHeader;
        private int $chunkSize;
        private bool $tls;
        private string $passwordProtected;

        public function __construct(
                AppConfig $config,
                LoggerInterface $logger,
                StatusFactory $statusFactory,
                ICertificateManager $certificateManager
        ) {
                parent::__construct($config, $logger, $statusFactory);

                $avHost = $this->appConfig->getAvHost();
                $avPort = $this->appConfig->getAvPort();
                $this->service = $config->getAvIcapRequestService();
                $this->virusHeader = $config->getAvIcapResponseHeader();
                $this->chunkSize = (int)$config->getAvChunkSize();
                $this->mode = $config->getAvIcapMode();
                $this->tls = $config->getAvIcapTls();
                $this->passwordProtected = $config->getAvPasswordAction();

                if (!($avHost && $avPort)) {
                        throw new \RuntimeException('The ICAP port and host are not set up.');
                }
                if ($this->tls) {
                        $this->icapClient = new ICAPTlsClient($avHost, (int)$avPort, (int)$config->getAvIcapConnectTimeout(), $certificateManager);
                } else {
                        $this->icapClient = new ICAPClient($avHost, (int)$avPort, (int)$config->getAvIcapConnectTimeout());
                }
        }

        public function initScanner() {
                parent::initScanner();
                $this->writeHandle = fopen("php://temp", 'w+');
                $path = '/' . trim($this->path, '/');
                if (str_contains($path, '.ocTransferId') && str_ends_with($path, '.part')) {
                        [$path] = explode('.ocTransferId', $path, 2);
                }
                $remote = $this->request?->getRemoteAddress();
                $encodedPath = implode("/", array_map("rawurlencode", explode("/", $path)));
                if ($this->mode === ICAPClient::MODE_REQ_MOD) {
                        $this->icapRequest = $this->icapClient->reqmod($this->service, [
                                'Allow' => 204,
                                "X-Client-IP" => $remote,
                        ], [
                                "PUT $encodedPath HTTP/1.0",
                                "Host: nextcloud"
                        ]);
                } else {
                        $this->icapRequest = $this->icapClient->respmod($this->service, [
                                'Allow' => 204,
                                "X-Client-IP" => $remote,
                        ], [
                                "GET $encodedPath HTTP/1.0",
                                "Host: nextcloud",
                        ], [
                                "HTTP/1.0 200 OK",
                                "Content-Length: 1", // a dummy, non-zero, content length seems to be enough
                        ]);
                }
        }

        protected function writeChunk($chunk) {
                if (ftell($this->writeHandle) > $this->chunkSize) {
                        $this->flushBuffer();
                }
                parent::writeChunk($chunk);
        }

        private function flushBuffer() {
                rewind($this->writeHandle);
                $data = stream_get_contents($this->writeHandle);
                $this->icapRequest->write($data);
                $this->writeHandle = fopen("php://temp", 'w+');
        }

        protected function scanBuffer() {
                $this->flushBuffer();
                $response = $this->icapRequest->finish();
                $code = $response->getStatus()->getCode();
                $unchecked_list = array("decode_error","max_archive_layers_exceeded");
                $blocked_list = array("file_type_blocked", "file_extension_blocked");

                $this->status->setNumericStatus(Status::SCANRESULT_CLEAN);
                if ($code === 200 || $code === 204) {
                        // c-icap/clamav reports this header
                        $virus = $response->getIcapHeaders()[$this->virusHeader] ?? false;
                        if ($virus) {
                                $this->status->setNumericStatus(Status::SCANRESULT_INFECTED);
                                $this->status->setDetails($virus);
                        }

                        // kaspersky(pre 2020 product editions) and McAfee handling
                        $respHeader = $response->getResponseHeaders()['HTTP_STATUS'] ?? '';
                        if (\strpos($respHeader, '403 Forbidden') || \strpos($respHeader, '403 VirusFound')) {
                                $this->status->setNumericStatus(Status::SCANRESULT_INFECTED);
                        }
                } elseif ($code === 202) {
                        $this->status->setNumericStatus(Status::SCANRESULT_UNCHECKED);
                } elseif ($code === 500 && $response->getIcapHeaders()['X-Error-Code'] === 'password_protected') {
                        if ($this->passwordProtected === "accept") {
                                $this->status->setNumericStatus(Status::SCANRESULT_CLEAN);
                        } else {
                                $this->status->setNumericStatus(Status::SCANRESULT_INFECTED);
                        }
                } elseif ($code === 500 && in_array($response->getIcapHeaders()['X-Error-Code'], $unchecked_list)) {
                        $this->status->setNumericStatus(Status::SCANRESULT_UNCHECKED);
                } elseif ($code === 500 && in_array($response->getIcapHeaders()['X-Error-Code'], $blocked_list)) {
                        $this->status->setNumericStatus(Status::SCANRESULT_INFECTED);
                } else {
                        throw new \RuntimeException('Invalid response from ICAP server');
                }
        }

        protected function shutdownScanner() {
                $this->scanBuffer();
        }

        public function setDebugCallback(callable $callback): void {
                $this->icapClient->setDebugCallback($callback);
        }
}