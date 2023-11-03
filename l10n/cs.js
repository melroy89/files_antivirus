OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Vyčistit",
    "Infected" : "Nakažené",
    "Unchecked" : "Nezkontrolováno",
    "Scanner exit status" : "Návratový stav skeneru",
    "Scanner output" : "Výstup ze skeneru",
    "Saving…" : "Ukládání…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Soubor {file} je infikován virem {virus}",
    "The file has been removed" : "Soubor byl odebrán",
    "File containing {virus} detected" : "Zjištěn soubor obsahující virus {virus}",
    "Antivirus detected a virus" : "Antivir zjistil virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "V souboru byl zjištěn virus %s. Nahrávání nebylo možné dokončit.",
    "Saved" : "Uloženo",
    "Antivirus for files" : "Antivir pro soubory",
    "An antivirus app for Nextcloud" : "Antivirová aplikace pro Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source), Kaspersky Scan Engine or an ICAP compatible scanner\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus pro soubory je antivirová aplikace pro Nextcloud.\n\n* 🕵️‍♂️ Když uživatel nahraje soubor, je zkontrolován\n* ☢️ Nahrané a infikované soubory budou smazány a oznámení bude zobrazeno a/nebo odesláno emailem\n* 🔎 Úloha na pozadí pro skenování všech souborů\n* ❓ Použijte ClamAV (open-source), Kaspersky Scan Engine, nebo nějaký jiný, ICAP kompatibilní\n\nTato aplikace kontroluje soubory, které jsou nahrány do Nextcloud, zda neobsahují viry, než jsou zapsány do úložiště Nextcloud. Pokud je soubor identifikován jako virus, je buď nahlášen, nebo není nahrán na server. Aplikace spoléhá na základní vyhledávací modul virů ClamAV, na který správce při konfiguraci aplikace odkazuje na Nextcloud. Alternativně lze nastavit modul Kaspersky Scan Engine, u kterého je třeba, aby byl provozován na samostatném serveru.\nAby byla tato aplikace účinná, měly by být definice virů ClamAV aktualizovány. Upozorňujeme, že povolení této aplikace ovlivní výkon systému, protože pro každé nahrávání je nutné další zpracování. Více informací je k dispozici v dokumentaci k antiviru.",
    "Greetings {user}," : "Zdravíme {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Je nám líto, ale v souboru, který jste nahráli byl nalezen škodlivý software a bylo nutno soubor smazat.",
    "This email is a notification from {host}. Please, do not reply." : "Tento e-mail je upozornění z {host}. Neodpovídejte na něj.",
    "File uploaded: {file}" : "Nahrán soubor: {file}",
    "Antivirus for Files" : "Antivir pro Soubory",
    "Mode" : "Režim",
    "ClamAV Executable" : "Spustitelný soubor s ClamAV",
    "ClamAV Daemon" : "Proces služby skeneru ClamAV",
    "ClamAV Daemon (Socket)" : "Proces služby ClamAV (socket)",
    "Kaspersky Daemon" : "Proces služby skeneru Kaspersky",
    "ICAP server" : "ICAP server",
    "Socket" : "Soket",
    "ClamAV Socket." : "Soket ClamAV.",
    "Not required in Executable Mode." : "Ve spustitelném režimu není třeba.",
    "Host" : "Stroj",
    "Address of Antivirus Host." : "Adresa stroje s antivirem.",
    "Port" : "Port",
    "Port number of Antivirus Host." : "Číslo portu hostitele antiviru.",
    "TLS" : "TLS",
    "Use TLS encryption." : "Použít TLS šifrování.",
    "ICAP preset" : "Přednastavené pro ICAP",
    "Select" : "Vybrat",
    "ICAP mode" : "ICAP režim",
    "ICAP service" : "ICAP služba",
    "ICAP virus response header" : "Záhlaví odpovědi ICAP ohledně viru",
    "Stream Length" : "Délka proudu",
    "ClamAV StreamMaxLength value in bytes." : "Hodnota ClamAV StreamMaxLength (v bajtech).",
    "bytes" : "bajtů",
    "Path to clamscan" : "Popis umístění clamscan",
    "Path to clamscan executable." : "Popis umístění spustitelného souboru clamscan",
    "Not required in Daemon Mode." : "Není vyžadováno v režimu procesu služby.",
    "Extra command line options (comma-separated)" : "Další volby příkazového řádku (oddělované čárkou)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Limit velikosti souboru pro pravidelné kontroly na pozadí a nahrávání ve shlucích, -1 znamená žádný limit",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Do jaké jejich velikosti skenovat soubory na pozadí a nahrávat ve shlucích (v bajtech), -1 znamená bez omezení",
    "Check only first bytes of the file, -1 means no limit" : "Zkontrolovat pouze tolik prvních bajtů souboru, -1 znamená zkontrolovat celý",
    "When infected files are found during a background scan" : "Pokud jsou při skenování na pozadí nalezeny nakažené soubory",
    "Only log" : "Pouze zaznamenávat",
    "Delete file" : "Smazat soubor",
    "Save" : "Uložit",
    "Advanced" : "Pokročilé",
    "Rules" : "Pravidla",
    "Clear All" : "Vyčistit vše",
    "Reset to defaults" : "Vrátit na výchozí",
    "Match by" : "Hledat shodu s",
    "Scanner exit status or signature to search" : "Návratový stav skeneru nebo signatura kterou hledat",
    "Description" : "Popis",
    "Mark as" : "Označit jako",
    "Add a rule" : "Přidat pravidlo"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
