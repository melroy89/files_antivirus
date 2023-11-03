OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Limpar",
    "Infected" : "Infectado",
    "Unchecked" : "Sen verificar",
    "Scanner exit status" : "Estado de saída do escáner",
    "Scanner output" : "Saída do escáner",
    "Saving…" : "Gardando…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "O ficheiro {file} está infectado con {virus}",
    "The file has been removed" : "O ficheiro foi retirado",
    "File containing {virus} detected" : "Detectouse un ficheiro que contén {virus}",
    "Antivirus detected a virus" : "Antivirus detectou un virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Detectouse o virus %s no ficheiro. Non é posíbel completar o envío.",
    "Saved" : "Gardado",
    "Antivirus for files" : "Antivirus para ficheiros",
    "An antivirus app for Nextcloud" : "Unha aplicación de antivirus para Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus para ficheiros é unha aplicación antivirus para Nextcloud.\n\n* 🕵️♂️ Cando o usuario envía un ficheiro, este comprobase\n* ☢️ Os ficheiros enviados e infectados eliminaranse e amosarase unha notificación e/ou enviarase por correo electrónico\n* 🔎 Traballo en segundo plano para escanear todos os ficheiros\n* ❓ Usa ClamAV (código aberto), Kaspersky Scan Engine ou un escáner compatíbel con ICAP\n\nEsta aplicación inspecciona os ficheiros que se envía a Nextcloud na busca de virus antes de que estean escritos no almacenamento de Nextcloud. Se un ficheiro é identificado como un virus, rexistrase e non se envía ao servidor. A aplicación baséase no motor de exploración de virus ClamAV subxacente, que a administración indica a Nextcloud ao configurar a aplicación.\nPara que esta aplicación sexa efectiva, as definicións do virus ClamAV deberían estar actualizadas. Teña en conta tamén que activar esta aplicación afectará ao rendemento do sistema xa que se precisa un procesamento adicional para cada envío. Atopará máis información dispoñíbel na documentación do Antivirus.",
    "Greetings {user}," : "Saúdos {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Desculpe, mais detectouse un programa malicioso nun ficheiro que intentou enviar e tivo que ser eliminado.",
    "This email is a notification from {host}. Please, do not reply." : "Este é un correo é unha notificación dende {host}. Non responda.",
    "File uploaded: {file}" : "Ficheiro enviado: {file}",
    "Antivirus for Files" : "Antivirus para Ficheiros",
    "Mode" : "Modo",
    "ClamAV Executable" : "Executábel de ClamAV",
    "ClamAV Daemon" : "Servizo de ClamAV",
    "ClamAV Daemon (Socket)" : "Servizo de ClamAV (conectador)",
    "Kaspersky Daemon" : "Sevizo de Kaspersky",
    "ICAP server" : "Servidor ICAP",
    "Socket" : "Conectador",
    "ClamAV Socket." : "Conectador do ClamAV.",
    "Not required in Executable Mode." : "Non é preciso no modo executábel.",
    "Host" : "Servidor",
    "Address of Antivirus Host." : "Enderezo do servidor antivirus",
    "Port" : "Porto",
    "Port number of Antivirus Host." : "Número de porto do servidor antivirus.",
    "TLS" : "TLS",
    "Use TLS encryption." : "Empregar o cifrado TLS.",
    "ICAP preset" : "Preaxuste ICAP",
    "Select" : "Seleccionar",
    "ICAP mode" : "Modo ICAP",
    "ICAP service" : "Servizo ICAP",
    "ICAP virus response header" : "Cabeceira de resposta ao virus ICAP",
    "Stream Length" : "Lonxitude do fluxo",
    "ClamAV StreamMaxLength value in bytes." : "Valor StreamMaxLength do ClamAV en bytes.",
    "bytes" : "bytes",
    "Path to clamscan" : "Ruta a clamscan",
    "Path to clamscan executable." : "Ruta ao executábel clamscan",
    "Not required in Daemon Mode." : "Non é preciso no modo servizo.",
    "Extra command line options (comma-separated)" : "Opcións extra da liña de ordes (separadas por comas)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Límite de tamaño de ficheiro para exploracións periódicas en segundo plano e envios fragmentados, -1 significa que non hai límite",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Límite de tamaño en bytes do ficheiro para exploración en segundo plano e de envío fragmentado, -1 significa que non hai límite",
    "Check only first bytes of the file, -1 means no limit" : "Comprobe só os primeiros bytes do ficheiro, -1 significa que non hai límite",
    "When infected files are found during a background scan" : "Cando se atopan ficheiros infectados durante un escaneo en segundo plano",
    "Only log" : "Só o rexistro",
    "Delete file" : "Eliminar ficheiro",
    "Save" : "Gardar",
    "Advanced" : "Avanzado",
    "Rules" : "Regras",
    "Clear All" : "Limpar todo",
    "Reset to defaults" : "Restabelecer os valores predeterminados",
    "Match by" : "Coincidir con",
    "Scanner exit status or signature to search" : "Estado de saída do escáner ou sinatura para buscar",
    "Description" : "Descrición",
    "Mark as" : "Marcar como",
    "Add a rule" : "Engadir unha regra"
},
"nplurals=2; plural=(n != 1);");
