OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Чистий",
    "Infected" : "Інфікований",
    "Unchecked" : "Неперевірений",
    "Scanner exit status" : "Статус завершення сканування",
    "Scanner output" : "Вивід сканера",
    "Saving…" : "Збереження...",
    "Antivirus" : "Антивірус",
    "File {file} is infected with {virus}" : "Файл {file} інфіковано вірусом {virus}",
    "The file has been removed" : "Файл було вилучено",
    "File containing {virus} detected" : "Знайдено файл, що містить вірус {virus}",
    "Antivirus detected a virus" : "Антивірус знайшов вирус",
    "Virus %s is detected in the file. Upload cannot be completed." : "У файлі знайдено вірус %s. Завантаження неможливо завершити.",
    "Saved" : "Збережено",
    "Antivirus for files" : "Антивірус для файлів",
    "An antivirus app for Nextcloud" : "Антивірусна програма для Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Антивірус для файлів — це антивірусна програма для Nextcloud. \n\n* 🕵️‍♂️ Коли користувач завантажує файл, він позначається \n* ☢️ Завантажені та інфіковані файли буде видалено, а сповіщення буде показано та/або надіслано електронною поштою \n* 🔎 Фонове завдання для сканування всіх файлів \n* ❓ Використовуйте ClamAV (з відкритим кодом) або Kaspersky Scan Engine \nЦя програма перевіряє файли, які завантажуються в Nextcloud, на наявність вірусів, перш ніж їх записувати в сховище Nextcloud. Якщо файл визначено як вірус, він або реєструється, або не завантажується на сервер. Програма покладається на базовий механізм сканування вірусів ClamAV, на який адміністратор вказує Nextcloud під час налаштування програми. Крім того, можна налаштувати Kaspersky Scan Engine, який має працювати на окремому сервері. \nЩоб ця програма була ефективною, визначення вірусів ClamAV мають бути актуальними. Також зауважте, що ввімкнення цієї програми вплине на продуктивність системи, оскільки для кожного завантаження потрібна додаткова обробка. Більше інформації доступно в Антивірусна документація.",
    "Greetings {user}," : "Вітаю, {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Перепрошую, але у файлі, який ви намагаєтесь завантажити, знайдено шкідливий код. Файл потрібно вилучити.",
    "This email is a notification from {host}. Please, do not reply." : "Цей електронний лист є сповіщенням від {host}. Будь-ласка не відповідайте.",
    "File uploaded: {file}" : "Файл завантажено: {file}",
    "Antivirus for Files" : "Антивірус для Файлів",
    "Mode" : "Режим",
    "ClamAV Executable" : "Виконуваний файл ClamAV",
    "ClamAV Daemon" : "Демон ClamAV",
    "ClamAV Daemon (Socket)" : "Демон ClamAV (сокет)",
    "Kaspersky Daemon" : "Kaspersky Daemon",
    "ICAP server" : "ICAP server",
    "Socket" : "Сокет",
    "ClamAV Socket." : "ClamAV Socket.",
    "Not required in Executable Mode." : "Не обов'язково у режимі Виконуваного файлу",
    "Host" : "Хост",
    "Address of Antivirus Host." : "Адреса хоста Антивіруса.",
    "Port" : "Порт",
    "Port number of Antivirus Host." : "Номер порту хоста Антивіруса.",
    "ICAP preset" : "ICAP preset",
    "Select" : "Вибрати",
    "ICAP service" : "ICAP service",
    "ICAP virus response header" : "Заголовок відповіді на вірус ICAP",
    "Stream Length" : "Довжина потоку",
    "ClamAV StreamMaxLength value in bytes." : "Значення ClamAV StreamMaxLength у байтах.",
    "bytes" : "байтів",
    "Path to clamscan" : "Шлях до clamscan",
    "Path to clamscan executable." : "Шлях до Виконуваного файлу clamscan.",
    "Not required in Daemon Mode." : "Не обов'язково у режимі Демона.",
    "Extra command line options (comma-separated)" : "Додаткові опції командного рядка (через коми)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Обмеження розміру файлу для періодичного сканування у фоновому режимі та завантаження фрагментів, -1 означає відсутність обмеження",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Обмеження розміру файлу для фонового сканування та розділеного завантаження в байтах, -1 означає відсутність обмеження",
    "When infected files are found during a background scan" : "Якщо інфікований файл знайдено під час фонового сканування",
    "Only log" : "Тільки записати до журналу",
    "Delete file" : "Вилучити файл",
    "Save" : "Зберегти",
    "Advanced" : "Додатково",
    "Rules" : "Правила",
    "Clear All" : "Очистити Все",
    "Reset to defaults" : "Скинути налаштування до стандартних",
    "Match by" : "Збіг за",
    "Scanner exit status or signature to search" : "Статус завершення сканування або сінгатура для пошуку",
    "Description" : "Опис",
    "Mark as" : "Позначити як",
    "Add a rule" : "Додати правило"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
