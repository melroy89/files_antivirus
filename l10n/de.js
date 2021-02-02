OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Bereinigt",
    "Infected" : "Infiziert",
    "Unchecked" : "Ungeprüft",
    "Scanner exit status" : "Scanner-Abschluss-Status",
    "Scanner output" : "Scanner-Ergebnis",
    "Saving…" : "Speichere…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Die Datei {file} ist mit {virus} infiziert",
    "The file has been removed" : "Die Datei wurde entfernt",
    "File containing {virus} detected" : "Datei mit {virus} gefunden",
    "Antivirus detected a virus" : "Antivirus hat einen Virus gefunden",
    "Virus %s is detected in the file. Upload cannot be completed." : "Der Virus %s wurde in der Datei gefunden. Das Hochladen kann nicht abgeschlossen werden. ",
    "Saved" : "Gespeichert",
    "Antivirus for files" : "Antivirus für Dateien",
    "An antivirus app for Nextcloud" : "Eine Antivirus-App für Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus für Dateien ist eine Antivirus-App für Nextcloud.\n\n* 🕵️‍♂️ Wenn ein Benutzer eine Datei hochlädt, wird diese überprüft\n* ☢️ Hochgeladene und infizierte Dateien werden gelöscht und eine Benachrichtigung darüber wird angezeigt und/oder als E-Mail verschickt\n* 🔎 Hintergrundscan von allen Dateien\n* ❓ Verwende ClamAV (Open Source) oder Kaspersky Scan Engine\n\nDiese Applikation inspiziert Dateien auf Viren, welche in die Nextcloud hochgeladen werden und dies bevor diese in den Speicher geschrieben werden. Wenn eine Datei als Virus identifiziert wird, wird dies entweder in eine Protokoll-Datei geschrieben oder gar nicht erst auf den Server hochgeladen. Die Applikation stützt sich grundlegend auf ClamAV-Antivirus, welches der Administrator bei der Einrichtung dieser auf Nextcloud einstellt. Alternativ kann auch die Kaspersky Scan Engine konfiguriert werden, welche auf einem separaten Server laufen muss.\nDamit diese App effektiv arbeiten kann, sollten die Definitionen von ClamAV immer aktuell gehalten werden. Es sollte bedacht werden, dass die Aktivierung dieser App einen Einfluss auf die Geschwindigkeit des Systems hat, da bei jedem möglichen hochladen ein Verarbeitung nötig sind. Weitere Informationen sind in der Antivirus-Dokumentationen vorhanden.",
    "Greetings {user}," : "Willkommen, {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Entschuldigung, aber in einer hochzuladenden Datei wurde Malware gefunden und diese daher gelöscht.",
    "This email is a notification from {host}. Please, do not reply." : "Diese E-Mail ist eine Benachrichtigung von {host}. Bitte antworte nicht darauf.",
    "File uploaded: {file}" : "Datei hochgeladen: {file}",
    "Antivirus for Files" : "Antivirus für Dateien",
    "Mode" : "Modus",
    "ClamAV Executable" : "Ausführbare ClamAV-Datei",
    "ClamAV Daemon" : "ClamAV-Daemon",
    "ClamAV Daemon (Socket)" : "ClamAV-Daemon (Socket)",
    "Kaspersky Daemon" : "Kaspersky-Daemon",
    "Socket" : "Socket",
    "ClamAV Socket." : "ClamAV-Socket.",
    "Not required in Executable Mode." : "Nicht notwendig im Anwendungsmodus.",
    "Host" : "Host",
    "Address of Antivirus Host." : "Adresse des Antivirus-Hosts",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Port-Nummer des Antivirus-Hosts.",
    "Stream Length" : "Länge des Datenstroms",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength-Wert in Bytes.",
    "bytes" : "Byte",
    "Path to clamscan" : "Pfad zu ClamScan",
    "Path to clamscan executable." : "Pfad zur ClamScan-Anwendung.",
    "Not required in Daemon Mode." : "Nicht notwendig im Daemon-Modus.",
    "Extra command line options (comma-separated)" : "Zusätzliche Kommandozeilen-Optionen (mit Komma getrennt)",
    "File size limit for periodic background scans, -1 means no limit" : "Dateigrößenbeschränkung für Hintergrund-Scans, -1 bedeutet kein Limit",
    "Background scan file size limit in bytes, -1 means no limit" : "Dateigrößenbeschränkung für Hintergrund-Scans, -1 bedeutet kein Limit",
    "When infected files are found during a background scan" : "Wenn infizierte Dateien während eines Hintergrund-Scans gefunden werden",
    "Only log" : "Nur loggen",
    "Delete file" : "Datei löschen",
    "Save" : "Speichern",
    "Advanced" : "Erweitert",
    "Rules" : "Regeln",
    "Clear All" : "Alles löschen",
    "Reset to defaults" : "Auf Standard zurücksetzen",
    "Match by" : "Übereinstimmung anhand",
    "Scanner exit status or signature to search" : "Scanner-Abschluss-Status oder Signatur, nach der gesucht werden soll",
    "Description" : "Beschreibung",
    "Mark as" : "Markieren als",
    "Add a rule" : "Eine Regel hinzufügen"
},
"nplurals=2; plural=(n != 1);");
