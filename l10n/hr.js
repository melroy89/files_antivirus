OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Očisti",
    "Infected" : "Zaraženo",
    "Unchecked" : "Neprovjereno",
    "Scanner exit status" : "Izlazni status skeniranja",
    "Scanner output" : "Izlaz skeniranja",
    "Saving…" : "Spremanje...",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Datoteka {file} zaražena je s {virus}",
    "The file has been removed" : "Datoteka je uklonjena",
    "File containing {virus} detected" : "Otkrivena je datoteka koja sadrži {virus}",
    "Antivirus detected a virus" : "Antivirus je otkrio virus",
    "Virus %s is detected in the file. Upload cannot be completed." : "Virus %s je otkriven u datoteci. Nije moguće dovršiti otpremu.",
    "Saved" : "Spremljeno",
    "Antivirus for files" : "Antivirus za datoteke",
    "An antivirus app for Nextcloud" : "Antivirusna aplikacija za Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Antivirus za datoteke je antivirusna aplikacija za Nextcloud temeljena na softveru ClamAV.\n\n* 🕵 ️ ‍♂️ Datoteka se provjerava čim je korisnik otpremi\n* ☢ Otpremljene i zaražene datoteke se brišu, a obavijest o brisanju se prikazuje i/ili šalje e-poštom\n* 🔎 Skeniranje datoteka obavlja se u pozadini\n* ❓ Koristite ClamAV (otvoreni kod) ili Kaspersky Scan Engine\n\nOva aplikacija pregledava datoteke koje su otpremljene u Nextcloud za eventualne viruse prije nego što se pohrane unutar Nextclouda. Ako je datoteka identificirana kao virus, ta se informacija zapisuje ili se datoteka ne otprema na poslužitelj. Aplikacija se oslanja na temeljni mehanizam za skeniranje virusa ClamAV na koji administrator upućuje Nextcloud prilikom konfiguriranja aplikacije. Također možete konfigurirati Kaspersky Scan Engine koji se mora izvoditi na odvojenom poslužitelju.\nKako bi ova aplikacija bila učinkovita, definicije virusa iz softvera ClamAV treba stalno ažurirati. Također imajte na umu da će omogućavanje ove aplikacije utjecati na performanse sustava jer je za svako otpremanje datoteka potrebna zasebna obrada. Više informacija dostupno je u dokumentaciji antivirusne aplikacije.",
    "Greetings {user}," : "Pozdrav {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "nažalost, u datoteci koju ste pokušali otpremiti otkriven je zloćudan softver koji je morao biti izbrisan.",
    "This email is a notification from {host}. Please, do not reply." : "Ova poruka e-pošte sadrži obavijest od {host}. Nemojte odgovarati na ovu poruku.",
    "File uploaded: {file}" : "Otpremljena datoteka: {file}",
    "Antivirus for Files" : "Antivirus za datoteke",
    "Mode" : "Način rada",
    "ClamAV Executable" : "ClamAV Executable",
    "ClamAV Daemon" : "ClamAV Daemon",
    "ClamAV Daemon (Socket)" : "ClamAV Daemon (Socket)",
    "Kaspersky Daemon" : "Kaspersky Daemon",
    "Socket" : "Socket",
    "ClamAV Socket." : "ClamAV Socket.",
    "Not required in Executable Mode." : "Nije potrebno u izvedbenom načinu rada.",
    "Host" : "Glavno računalo",
    "Address of Antivirus Host." : "Adresa računala domaćina antivirusa.",
    "Port" : "Priključak",
    "Port number of Antivirus Host." : "Broj porta računala domaćina antivirusa.",
    "Stream Length" : "Dužina strujanja",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength vrijednost u bajtovima.",
    "bytes" : "bajtova",
    "Path to clamscan" : "Put do clamscana",
    "Path to clamscan executable." : "Put do izvršne datoteke clamscana.",
    "Not required in Daemon Mode." : "Nije potrebno u načinu rada Daemon.",
    "Extra command line options (comma-separated)" : "Dodatne mogućnosti naredbenog retka (odvojene zarezom)",
    "File size limit for periodic background scans, -1 means no limit" : "Ograničenje veličine datoteke za periodička pozadinska skeniranja, -1 znači da nema ograničenja",
    "Background scan file size limit in bytes, -1 means no limit" : "Ograničenje veličine datoteke za pozadinsko skeniranje u bajtovima, -1 znači da nema ograničenja",
    "When infected files are found during a background scan" : "Kada se tijekom pozadinskog skeniranja pronađu zaražene datoteke",
    "Only log" : "Samo zapis",
    "Delete file" : "Izbrisati datoteku",
    "Save" : "Spremi",
    "Advanced" : "Napredno",
    "Rules" : "Pravila",
    "Clear All" : "Očisti sve",
    "Reset to defaults" : "Vrati na zadane postavke",
    "Match by" : "Podudaranje",
    "Scanner exit status or signature to search" : "Status izlaza ili potpis skenera za pretraživanje",
    "Description" : "Opis",
    "Mark as" : "Označi kao",
    "Add a rule" : "Dodaj pravilo"
},
"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;");
