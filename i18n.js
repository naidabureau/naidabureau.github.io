/* Перемикач мови UA / EN для всього сайту.
   Як працює: сайт написаний українською, а цей файл підставляє англійський текст.
   Щоб змінити переклад — знайдіть український рядок у словнику EN нижче і змініть англійський.
   Якщо додали новий текст на сайт — додайте в EN пару 'український текст': 'English text'.
   Мова запамʼятовується; також можна відкрити сторінку з ?lang=en або ?lang=uk. */
(() => {
const EN = {
  /* ---------- загальне: меню, мета ---------- */
  'NaidaBureau — Наталія Найда, дизайнерка і фулстак-розробниця: застосунки, сайти, віджети.': 'NaidaBureau — Natalia Naida, designer and full-stack developer: apps, websites, widgets.',
  'Design & fullstack code: застосунки, сайти, віджети.': 'Design & fullstack code: apps, websites, widgets.',
  'NaidaBureau — проєкти': 'NaidaBureau — projects',
  'NaidaBureau — контакти': 'NaidaBureau — contacts',
  'NaidaBureau — живий редактор': 'NaidaBureau — live editor',
  'Головне меню': 'Main menu',
  'Меню': 'Menu',
  'Закрити': 'Close',
  'Проєкти': 'Projects',
  'Живий редактор': 'Live editor',
  'Контакти': 'Contacts',
  '← головна': '← home',
  '← на головну': '← back home',
  'Скопійовано ✓': 'Copied ✓',
  'Скопійовано': 'Copied',
  'Копіювати': 'Copy',
  'Телефон': 'Phone',
  'Відважні': 'Vidvazhni',
  'Чисті серця Калуш': 'Pure Hearts Kalush',
  'Чисті серця': 'Pure Hearts',
  'Івано-Франківськ': 'Ivano-Frankivsk',
  'Лови −20%': 'Catch −20%',
  'на мої послуги': 'off my services',
  'Не так швидко!': 'Not so fast!',
  'Майже!': 'Almost!',

  /* ---------- головна ---------- */
  'Частинки, що складаються у знак NaidaBureau': 'Particles forming the NaidaBureau mark',
  'Сцени': 'Scenes', 'Сцена 1': 'Scene 1', 'Сцена 2': 'Scene 2', 'Сцена 3': 'Scene 3', 'Сцена 4': 'Scene 4', 'Сцена 5: інші версії': 'Scene 5: other versions',
  'Роботи': 'Work',
  'Відважні — платформа для ветеранського бізнесу': 'Vidvazhni — a platform for veteran-owned businesses',
  'Чисті серця Калуш — мобільна версія сайту': 'Pure Hearts Kalush — mobile website',
  'дотик — вибух': 'tap — explode', 'клік — вибух': 'click — explode', 'прокручуйте': 'scroll',
  'Email виділено': 'Email selected',
  'Сцена 1 · Знак': 'Scene 1 · The mark',
  '<N/> — мій підпис у коді': '<N/> — my signature in code',
  'Наталія Найда. Дизайнерка і фулстак-розробниця. Поведіть мишкою чи пальцем — частинки реагують. Натисніть — і знак розлетиться та збереться знову.': 'Natalia Naida. Designer and full-stack developer. Move your mouse or finger — the particles react. Click, and the mark will burst apart and come back together.',
  'Сцена 2 · Дизайн': 'Scene 2 · Design',
  'Власний дизайн': 'My own design',
  'Від першого ескізу до останнього пікселя: структура, кольори, шрифти, анімації. Дану частину проекту я не делегую.': 'From the first sketch to the last pixel: structure, colours, type, animation. This part of a project I never delegate.',
  'Сцена 3 · Код': 'Scene 3 · Code',
  'Магія коду': 'The magic of code',
  'AI допомагає в рутині, це в кілька разів прискорює роботу. Архітектуру, логіку і кожну зміну перед запуском перевіряю я.': 'AI helps with the routine and makes the work several times faster. The architecture, the logic and every change before launch — I check myself.',
  'Сцена 4 · Продукт': 'Scene 4 · Product',
  'Розробка застосунків, сайтів, програм, створення чат-ботів та автоматизація процесів з нуля до запуску: від ідеї та дизайну до реалізації та підтримки.': 'Apps, websites, software, chatbots and process automation from scratch to launch: from idea and design to build and support.',
  'Всі проєкти →': 'All projects →',
  'Сцена 5 · Ваша черга': 'Scene 5 · Your turn',
  'Відчуйте себе розробником і дизайнером': 'Feel like a developer and a designer',
  'Оберіть, як познайомитися зі мною ближче: попрацюйте в моїй власній операційній системі, змініть дизайн у живому редакторі або пройдіть гру про один день із життя дизайнерки й розробниці.': 'Choose how to get to know me: work in my own operating system, change the design in the live editor, or play a game about one day in the life of a designer and developer.',
  'Скопіювати email →': 'Copy email →',
  'Усі концепції →': 'All concepts →',

  /* ---------- живі мініатюри (minis.js) ---------- */
  '01 · ОС': '01 · OS', '02 · Редактор': '02 · Editor', '03 · Гра': '03 · Game',
  'Моя операційна система в браузері': 'My own operating system, in your browser',
  'Змініть дизайн — код оновиться': 'Change the design — the code updates',
  'Впіймайте знижку −20%': 'Catch a −20% discount',
  'Запустити': 'Launch', 'Відкрити': 'Open', 'Зіграти': 'Play',
  'спробуйте впіймати →': 'try to catch it →',
  '→ відкрито': '→ opened', '→ напишіть мені :)': '→ write to me :)',
  'Ха-ха': 'Ha-ha', 'Ще трошки!': 'A bit more!',
  'майже впіймали — відкрийте гру →': 'almost got it — open the game →',

  /* ---------- проєкти ---------- */
  'Проєкти NaidaBureau: платформа Відважні, сайт Чисті серця Калуш та інтерактивні версії портфоліо.': 'NaidaBureau projects: the Vidvazhni platform, the Pure Hearts Kalush website and interactive versions of the portfolio.',
  'Проєкти на сторінці': 'Projects on this page',
  'Відважні — головна сторінка веб-версії': 'Vidvazhni — web version home page',
  'Застосунок Відважні — головна, світла тема': 'Vidvazhni app — home, light theme',
  'Застосунок Відважні — головна, темна тема': 'Vidvazhni app — home, dark theme',
  'Застосунок Відважні — каталог бізнесів': 'Vidvazhni app — business catalogue',
  'Чисті серця Калуш — головна сторінка': 'Pure Hearts Kalush — home page',
  'Сайт Чисті серця Калуш — уся сторінка, прокручується': 'Pure Hearts Kalush website — full page, scrolling',
  'Чисті серця Калуш — мобільна версія': 'Pure Hearts Kalush — mobile version',
  'Збільшене зображення': 'Enlarged image',
  'Проєкти · 2022 → 2026': 'Projects · 2022 → 2026',
  'Роботи, які': 'Work that’s',
  'вже': 'already',
  'живуть': 'live',
  'Кожен проєкт — від ідеї й дизайну до коду, запуску і підтримки. Нижче — що це, як воно виглядає і що всередині.': 'Every project — from idea and design to code, launch and support. Below: what it is, how it looks and what is inside.',
  '01 Відважні': '01 Vidvazhni', '02 Чисті серця Калуш': '02 Pure Hearts Kalush', '03 Спробуйте самі': '03 Try it yourself',
  'Від': 'Vid', 'важні': 'vazhni',
  'ПЛАТФОРМА · МОБІЛЬНИЙ ЗАСТОСУНОК + ВЕБ · 2026': 'PLATFORM · MOBILE APP + WEB · 2026',
  'Уже працює · активно доопрацьовується': 'Live · actively being developed',
  'Платформа для ветеранського бізнесу. Об’єднує бізнеси ветеранів, ветеранок та їхніх родин: людей знаходять у каталозі й на карті, а ветерани публікують вакансії та оголошення, дізнаються про гранти й навчання, спілкуються зі спільнотою. Кожен бізнес перевіряє модератор.': 'A platform for veteran-owned businesses in Ukraine. It brings together businesses run by veterans and their families: people find them in the catalogue and on the map, while veterans post jobs and listings, learn about grants and training, and talk to the community. Every business is verified by a moderator.',
  'Каталог і карта перевірених бізнесів': 'Catalogue and map of verified businesses',
  'Вакансії, оголошення, підтримка, гранти, події': 'Jobs, listings, support, grants, events',
  'Реклама бізнесів за областю та анімовані банери': 'Regional business ads and animated banners',
  'Мобільний застосунок (PWA) і веб-версія': 'Mobile app (PWA) and web version',
  'МОЯ РОЛЬ: ДИЗАЙН І ФУЛСТАК-РОЗРОБКА': 'MY ROLE: DESIGN & FULL-STACK DEVELOPMENT',
  'Відкрити платформу ↗': 'Open the platform ↗',
  'Відважні · веб-версія': 'Vidvazhni · web version',
  'мобільний застосунок · світла й темна тема · каталог': 'mobile app · light & dark theme · catalogue',
  'Чисті': 'Pure', 'серця': 'Hearts', 'Калуш': 'Kalush',
  'САЙТ ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ · 2022 → РЕДИЗАЙН 2026': 'NGO WEBSITE · 2022 → REDESIGN 2026',
  'Сайт організації, яка з 2018 року допомагає ветеранам, військовим, родинам загиблих і зниклих безвісти та внутрішньо переміщеним особам: гуманітарна, психологічна та юридична підтримка.': 'The website of an NGO that has been helping veterans, service members, families of the fallen and missing, and displaced people since 2018: humanitarian, psychological and legal support.',
  'Концепція — українська вишивка хрестиком: серце, вишите хрестик за хрестиком, червона нитка через усі сторінки і приховані сердечка з історіями людей.': 'The concept is Ukrainian cross-stitch: a heart embroidered cross by cross, a red thread running through every page, and hidden hearts with real people’s stories.',
  'Анімоване вишите серце і нитка через сторінку': 'Animated stitched heart and a thread across the page',
  'Історія організації рік за роком': 'The organisation’s history, year by year',
  'Чотири напрями допомоги, новини, команда': 'Four areas of help, news, team',
  'Реквізити з копіюванням в один дотик': 'Bank details with one-tap copy',
  'Анімації': 'Animations', 'Мобільна версія': 'Mobile version',
  'МОЯ РОЛЬ: ДИЗАЙН І РОЗРОБКА': 'MY ROLE: DESIGN & DEVELOPMENT',
  'Відкрити сайт ↗': 'Open the website ↗',
  'уся сторінка': 'full page',
  'сторінка прокручується сама · наведіть, щоб зупинити': 'the page scrolls by itself · hover to pause',
  '03 · Спробуйте самі': '03 · Try it yourself',
  'Три інтерактивні версії цього портфоліо — теж мої проєкти.': 'Three interactive versions of this portfolio — also my projects.',
  'Маєте ідею? Обговоримо.': 'Got an idea? Let’s talk.',
  'Зв’язатися →': 'Get in touch →',

  /* ---------- контакти ---------- */
  'Контакти NaidaBureau: телефон, email, Telegram. Наталія Найда — дизайн і фулстак-розробка.': 'NaidaBureau contacts: phone, email, Telegram. Natalia Naida — design and full-stack development.',
  'Наприклад: потрібен застосунок для запису клієнтів, є дизайн / немає дизайну, бажаний термін…': 'For example: I need a booking app for clients, I have / don’t have a design, ideal deadline…',
  'Проєкт для NaidaBureau': 'Project for NaidaBureau',
  'Вітаю! Хочу обговорити проєкт.': 'Hi! I’d like to discuss a project.',
  'Розкажіть': 'Tell me', 'про': 'about your', 'ідею': 'idea',
  'Застосунок, сайт, чат-бот чи автоматизація — напишіть або зателефонуйте. Вартість і терміни обговоримо після короткої розмови.': 'An app, a website, a chatbot or automation — write or call. We’ll agree on price and timing after a short chat.',
  'Відкрита до нових проєктів': 'Open to new projects',
  'Івано-Франківськ · працюю віддалено': 'Ivano-Frankivsk, Ukraine · working remotely',
  'Або коротко опишіть задачу': 'Or briefly describe the task',
  'Надіслати листом →': 'Send by email →',
  'Відповідаю протягом дня. Кнопка відкриває вашу пошту з уже готовим листом.': 'I reply within a day. The button opens your email app with the message ready to go.',

  /* ---------- NaidaOS ---------- */
  'Робочий стіл NaidaOS': 'NaidaOS desktop',
  'AI-асистент працює під моїм контролем': 'The AI assistant works under my control',
  'Док': 'Dock', 'Головний екран Відважні': 'Vidvazhni home screen', 'Каталог бізнесів': 'Business catalogue', 'Екран': 'Screen',
  'Прокрутіть сайт': 'Scroll the website', 'Сайт Чисті серця Калуш, вся сторінка': 'Pure Hearts Kalush website, full page',
  'Команда терміналу': 'Terminal command', 'Тип проєкту': 'Project type', 'Ім’я': 'Name',
  'Сайт, застосунок, бот…': 'Website, app, bot…', 'Кілька слів про ідею': 'A few words about the idea',
  'Назад': 'Back', '‹ Назад': '‹ Back', 'Згорнути': 'Minimise', 'На весь екран': 'Full screen',
  'В': 'V', 'Термінал': 'Terminal', 'Послуги.app': 'Services.app', 'Про мене.txt': 'About me.txt', 'Написати': 'Write', 'Кошик': 'Bin',
  'Усі роботи': 'All work', 'Застосунки': 'Apps', 'Сайти': 'Websites', 'Віджети й боти': 'Widgets & bots',
  'Платформа · застосунок + веб · 2026': 'Platform · app + web · 2026',
  'Платформа, що об’єднує бізнес ветеранів і ветеранок: каталог і карта, вакансії, оголошення, гранти, чат. Працює як мобільний застосунок (встановлюється на телефон без App Store) і як веб-сайт — однаково зручно на телефоні й комп’ютері.': 'A platform that brings veteran-owned businesses together: catalogue and map, jobs, listings, grants, chat. It works as a mobile app (installs on a phone without the App Store) and as a website — equally handy on a phone or a computer.',
  'Головна': 'Home', 'Каталог': 'Catalogue',
  'Моя роль: дизайн і фулстак-розробка': 'My role: design & full-stack development',
  'Розробка 2022 · редизайн 2026 · дизайн і розробка': 'Built 2022 · redesign 2026 · design & development',
  '↑ прокрутіть сайт усередині вікна': '↑ scroll the website inside the window',
  'Що створюємо?': 'What are we building?', 'Лендинг': 'Landing page', 'Сайт': 'Website', 'Застосунок': 'App', 'Бот': 'Bot',
  'Дизайн з нуля': 'Design from scratch', 'Адмін-панель': 'Admin panel', 'Онлайн-оплата': 'Online payments', 'Кілька мов': 'Multiple languages', 'Анімації «вау»': '“Wow” animations', 'Підтримка': 'Support',
  'Вартість і терміни — після короткої розмови': 'Price and timing — after a short chat',
  'Обговорити проєкт →': 'Discuss a project →',
  'Як вас звати': 'Your name', 'Що хочете створити': 'What do you want to build', 'Повідомлення': 'Message', 'Надіслати': 'Send', 'Або напряму:': 'Or directly:',
  'Ідеї, які я викинула': 'Ideas I threw away',
  '✕ шаблонний лендинг «як у всіх»': '✕ a template landing page “like everyone’s”',
  '✕ ще один фіолетовий градієнт': '✕ yet another purple gradient',
  '✕ сайт без мобільної версії': '✕ a website with no mobile version',
  '✕ код, який ніхто не перевірив': '✕ code nobody has checked',
  '✕ «AI зробить усе сам»': '✕ “AI will do it all by itself”',
  'Кошик не очищується: нагадує, як не треба.': 'The bin is never emptied: a reminder of what not to do.',
  'Привіт! Я Наталія Найда.': 'Hi! I’m Natalia Naida.',
  'Дизайнерка і фулстак-розробниця.': 'Designer and full-stack developer.',
  'Створюю застосунки, сайти й віджети.': 'I build apps, websites and widgets.',
  '→ дизайн роблю сама, від ідеї до деталей': '→ I do the design myself, from idea to detail',
  '→ код пишу разом з AI, але кожен рядок': '→ I write code together with AI, but every line',
  'проходить через мене': 'goes through me',
  '→ відповідаю за результат до запуску': '→ I’m responsible for the result through launch',
  'Відкрийте «Проєкти» або наберіть help': 'Open “Projects” or type help',
  'у Терміналі.': 'in the Terminal.',
  'доступні команди:': 'available commands:',
  'about     хто я': 'about     who I am',
  'projects  мої роботи': 'projects  my work',
  'skills    що я вмію': 'skills    what I can do',
  'contact   як зі мною зв’язатися': 'contact   how to reach me',
  'ai        як я працюю з AI': 'ai        how I work with AI',
  'hire      замовити проєкт': 'hire      start a project',
  'theme     змінити акцент': 'theme     change the accent colour',
  'clear     очистити': 'clear     clear the screen',
  'Наталія Найда — дизайнерка і фулстак-розробниця. NaidaBureau = дизайн + код + контроль.': 'Natalia Naida — designer and full-stack developer. NaidaBureau = design + code + control.',
  '▸ Відважні — платформа для ветеранського бізнесу: застосунок + веб (2026, працює й доопрацьовується)': '▸ Vidvazhni — a platform for veteran-owned businesses: app + web (2026, live and in development)',
  '▸ Чисті серця Калуш — сайт ГО (2022 → редизайн 2026)': '▸ Pure Hearts Kalush — NGO website (2022 → redesign 2026)',
  'наберіть open vidvazhni': 'type open vidvazhni',
  'UI/UX · брендинг · анімації': 'UI/UX · branding · animation',
  'AI пише чернетки і рутину швидше. Архітектуру, дизайн і фінальний код вирішую я.': 'AI writes drafts and routine code faster. The architecture, the design and the final code are my call.',
  'кожна зміна переглянута людиною': 'every change is reviewed by a human',
  'тел.': 'tel.', 'відкриваю Послуги.app…': 'opening Services.app…', 'акцент змінено на': 'accent changed to',
  'доступ заборонено:': 'access denied:', 'контроль тут тільки в Наталії 🙂': 'only Natalia is in control here 🙂', 'контроль тут тільки в Наталії': 'only Natalia is in control here',
  'NaidaOS terminal · наберіть': 'NaidaOS terminal · type', 'відкрито': 'opened', 'не знайдено:': 'not found:', 'команда не знайдена:': 'command not found:', '· спробуйте help': '· try help',
  'дизайн під бренд · адаптив · форма заявки · публікація': 'on-brand design · responsive · enquiry form · publishing',
  'структура і дизайн сторінок · адаптив · редагування контенту · SEO': 'page structure & design · responsive · content editing · SEO',
  'дизайн екранів · бекенд і база · акаунти · встановлення на телефон': 'screen design · backend & database · accounts · install on phone',
  'логіка під ваш процес · Telegram або сайт · сповіщення': 'logic for your workflow · Telegram or website · notifications',
  'дизайн під бренд': 'on-brand design', 'адаптив': 'responsive', 'форма заявки': 'enquiry form', 'публікація': 'publishing',
  'структура і дизайн сторінок': 'page structure & design', 'редагування контенту': 'content editing', 'дизайн екранів': 'screen design', 'бекенд і база': 'backend & database',
  'акаунти': 'accounts', 'встановлення на телефон': 'install on phone', 'логіка під ваш процес': 'logic for your workflow', 'Telegram або сайт': 'Telegram or website', 'сповіщення': 'notifications',
  'Ім’я:': 'Name:', 'Що створюємо:': 'What we’re building:', 'Проєкт з NaidaOS': 'Project from NaidaOS', 'Відкриваю пошту…': 'Opening your email…',
  'завантаження design.kit': 'loading design.kit', 'завантаження fullstack.core': 'loading fullstack.core', 'підключення AI-асистента': 'connecting AI assistant',
  'ok · під контролем': 'ok · under control', 'перевірка якості людиною': 'human quality check', 'запуск робочого столу': 'starting desktop', 'клік — пропустити': 'click — skip',
  'Послуги': 'Services', 'Зв’язок': 'Contact', 'AI: під контролем': 'AI: under control', 'Привіт, я Наталія': 'Hi, I’m Natalia',

  /* ---------- Живий редактор ---------- */
  'Зараз редагують': 'Editing now', 'Режим': 'Mode', 'Сторінки і шари': 'Pages and layers', 'Полотно': 'Canvas', 'Межа рентгену': 'X-ray divider', 'Інспектор': 'Inspector',
  'Показати або сховати': 'Show or hide', 'Фон': 'Background', 'Колір': 'Colour',
  'Знак': 'Mark', 'Бейдж': 'Badge', 'дизайн + код + контроль': 'design + code + control', 'Заголовок': 'Heading', 'Підзаголовок': 'Subheading',
  'Дизайнерка і фулстак-розробниця.\nДизайн, Код, Тести.': 'Designer and full-stack developer.\nDesign, Code, Tests.',
  'Дизайн, Код, Тести.': 'Design, Code, Tests.',
  'Кнопка': 'Button', 'Замовити проєкт →': 'Start a project →', 'Мітка': 'Label', '● Відважні · працює, в розробці': '● Vidvazhni · live, in development',
  'Підпис 1': 'Caption 1', 'Підпис 2': 'Caption 2',
  'Чисті серця Калуш · сайт': 'Pure Hearts Kalush · website', '2022 → редизайн 2026': '2022 → redesign 2026',
  'Чисті серця Калуш · сайт\n2022 → редизайн 2026': 'Pure Hearts Kalush · website\n2022 → redesign 2026',
  'Відважні · платформа: застосунок + веб': 'Vidvazhni · platform: app + web',
  'Що я створюю': 'What I build', 'Лендинги': 'Landing pages', 'Боти': 'Bots', 'Ціна': 'Price', 'вартість — після короткої розмови': 'price — after a short chat',
  'Контакт': 'Contact', 'Зробимо\n«вау»\nразом?': 'Let’s make\n“wow”\ntogether?', 'Зробимо': 'Let’s make', '«вау»': '“wow”', 'разом?': 'together?',
  'Написати мені →': 'Write to me →', 'Водяний знак': 'Watermark',
  'Зробити заголовок фіолетовим градієнтом — зараз так модно.': 'Make the heading a purple gradient — it’s trendy right now.',
  'Лишаю світлий, але роблю більшим: бренд — це контраст, а не мода.': 'Keeping it light but making it bigger: a brand is contrast, not fashion.',
  'Змінити кнопку на синю, щоб «виділялась».': 'Make the button blue so it “stands out”.',
  'Салатовий — колір дії в бренді. Тільки заокруглюю сильніше.': 'Lime is the brand’s action colour. I’ll just round it more.',
  'Поставити телефон рівно, без нахилу.': 'Straighten the phone, no tilt.',
  'Нахил дає рух і живість. Навіть трохи посилюю.': 'The tilt adds movement and life. I’ll even increase it a little.',
  'Прибрати бейдж, він зайвий.': 'Remove the badge, it’s unnecessary.',
  'Бейдж — головна думка про мене. Лишаю і роблю помітнішим.': 'The badge is the key message about me. Keeping it and making it stand out.',
  'Додати тінь і градієнт, щоб було «багатше».': 'Add a shadow and gradient to make it look “richer”.',
  'Без декору заради декору. Лишаю чисто.': 'No decoration for its own sake. Keeping it clean.',
  '✎ Редагувати': '✎ Edit', '▶ Перегляд': '▶ Preview',
  'Сторінка «Контакт» — пишіть, обговоримо ваш проєкт': 'The “Contact” page — write to me and let’s discuss your project',
  '· згенеровано разом з AI, перевірено Наталією ✓': '· generated with AI, checked by Natalia ✓',
  'Оберіть будь-який елемент на полотні — тут з’являться його властивості й підказка AI.': 'Select any element on the canvas — its properties and an AI tip will appear here.',
  'Сторінка:': 'Page:', '· елементів:': '· elements:', 'Елемент': 'Element', 'Готово': 'Done', 'Позиція': 'Position', 'знака': 'of the mark', 'тексту': 'of the text', 'Нахил': 'Tilt',
  '● AI ПРОПОНУЄ': '● AI SUGGESTS', 'Прийняти': 'Accept', 'Моє рішення': 'My decision',
  'Можна. Але тут я б подумала ще раз 🙂': 'You can. But I’d think twice here 🙂',
  'AI запропонував — вирішуєте ви. А в моїх проєктах вирішую я.': 'AI suggested — you decide. In my projects, I decide.',
  'Рішення за Наталією ✓': 'Natalia’s call ✓',
  'Тепер ваша черга: клікайте, тягніть, міняйте кольори': 'Now it’s your turn: click, drag, change colours',
  'Готово. Клікайте на будь-що': 'Done. Click anything',
  'НН': 'NN', 'Ви': 'You', 'Дизайн': 'Design', 'Рентген': 'X-ray', 'Код': 'Code', 'Замовити': 'Hire me',
  'Сторінки': 'Pages', 'Шари': 'Layers', 'Підказка': 'Tip',
  'Клікніть елемент на полотні, тягніть його, двічі клікніть по тексту, щоб переписати. Спробуйте режим «Рентген».': 'Click an element on the canvas, drag it, double-click text to rewrite it. Try “X-ray” mode.',
  '● AI пише, Наталія перевіряє': '● AI writes, Natalia checks', 'Наталія': 'Natalia', 'Пропустити демо →': 'Skip demo →',
  '✎ Переписати текст': '✎ Rewrite text', 'Розмір': 'Size', 'Заокруглення': 'Radius',

  /* ---------- Naida Quest ---------- */
  'Колір тексту': 'Text colour', 'Колір знака': 'Mark colour', 'згенеровано разом з AI, перевірено Наталією ✓': 'generated with AI, checked by Natalia ✓', 'спробуйте help': 'try help',
  'Рівні': 'Levels', 'Час': 'Time', 'Рівень 1': 'Level 1', 'Рівень 2': 'Level 2', 'Рівень 3': 'Level 3', 'Рівень 4': 'Level 4',
  'Утримуйте, щоб запустити': 'Hold to launch', 'Нагорода': 'Reward', 'Зловіть знижку': 'Catch the discount',
  'Як до вас звертатися': 'What should I call you', 'Куди відповісти': 'Where should I reply', 'Що хочете отримати і до якого терміну': 'What you want and by when',
  'ДИЗАЙН': 'DESIGN', 'КОД': 'CODE', 'ЗАПУСК': 'LAUNCH', 'РІВЕНЬ': 'LEVEL',
  'ГРУ ПРОПУЩЕНО': 'GAME SKIPPED', 'Можна і без гри: приз однаково ваш.': 'No game needed: the prize is yours anyway.',
  'Гість': 'Guest', 'ГРУ ПРОЙДЕНО': 'GAME COMPLETE', 'Ви щойно пройшли мій робочий день.': 'You’ve just lived through my working day.',
  'ще один шаблон': 'another template', 'як у всіх': 'like everyone', 'фіолетовий градієнт': 'purple gradient', 'лорем іпсум': 'lorem ipsum', 'зроби «як у них»': 'make it “like theirs”',
  'Ідея': 'Idea', 'ІДЕЮ ЗНАЙДЕНО · +50 XP': 'IDEA FOUND · +50 XP', 'Так починається кожен проєкт': 'That’s how every project starts',
  'Спочатку мета і користь для людей, потім картинка. Шаблони відкидаю одразу.': 'First the goal and the value for people, then the visuals. Templates go straight in the bin.',
  'ДИЗАЙН ГОТОВИЙ · +50 XP': 'DESIGN DONE · +50 XP', 'Дизайн — моя зона': 'Design is my zone', 'Кожен блок стоїть там, де людині зручно.': 'Every block sits where it’s convenient for people.',
  'checkedBy: "Наталія",': 'checkedBy: "Natalia",',
  'КОД ПЕРЕВІРЕНО · +50 XP': 'CODE CHECKED · +50 XP', 'AI пише — я перевіряю': 'AI writes — I check',
  'Друкарська помилка, неправильна логіка... перед запуском все проходить перевірку та тести': 'A typo, wrong logic… before launch everything goes through review and tests',
  'шапка': 'header', 'банер': 'banner', 'кнопка': 'button', 'Виділено': 'Selected',
  'Ох, втомилась…': 'Phew, I’m tired…', 'все, здаюся — тисни': 'ok, I give up — click me',
  'Привіт, Наталіє!': 'Hi Natalia!',
  'Зловив(-ла) знижку в Naida Quest. Промокод: NAIDA20 (−20%)': 'I caught the discount in Naida Quest. Promo code: NAIDA20 (−20%)',
  'Контакт:': 'Contact:', 'Ідея:': 'Idea:', 'Знижка NAIDA20 · Naida Quest': 'NAIDA20 discount · Naida Quest', 'Текст виділено': 'Text selected',
  'Пропустити': 'Skip',
  'Пройдіть мій робочий процес за хвилину: знайдіть ідею, зберіть дизайн, виправте код і запустіть продукт. Наприкінці — нагорода.': 'Go through my workflow in a minute: find the idea, assemble the design, fix the code and launch the product. A reward waits at the end.',
  '1 · Ідея': '1 · Idea', '2 · Дизайн': '2 · Design', '3 · Код': '3 · Code', '4 · Запуск': '4 · Launch', 'Почати гру →': 'Start the game →',
  'РІВЕНЬ 1 · ІДЕЯ': 'LEVEL 1 · IDEA', 'Зловіть 5 ідей': 'Catch 5 ideas', 'Обходьте шаблони — вони забирають XP.': 'Avoid the templates — they take away XP.', 'ідеї:': 'ideas:',
  'РІВЕНЬ 2 · ДИЗАЙН': 'LEVEL 2 · DESIGN', 'Зберіть екран': 'Build the screen', 'Перетягніть блоки на свої місця в телефоні.': 'Drag the blocks into place on the phone.',
  'Замовити →': 'Hire me →', 'дизайн + код': 'design + code',
  'РІВЕНЬ 3 · КОД': 'LEVEL 3 · CODE', 'Знайдіть 3 баги': 'Find 3 bugs', 'AI написав чернетку. Перевірити — ваша робота.': 'AI wrote a draft. Checking it is your job.',
  'launch.js — чернетка від AI': 'launch.js — AI draft', 'знайдено:': 'found:', 'Підказка AI (−10 XP)': 'AI hint (−10 XP)',
  'РІВЕНЬ 4 · ЗАПУСК': 'LEVEL 4 · LAUNCH', 'Натисніть і тримайте кнопку, доки коло не заповниться.': 'Press and hold the button until the circle fills up.', 'ТРИМАЙТЕ': 'HOLD',
  'ВАШ РІВЕНЬ': 'YOUR LEVEL', 'ДОСВІД': 'XP', 'ЧАС': 'TIME',
  'Ідея, дизайн, код і запуск під моїм контролем — так я роблю кожен проєкт. Ось що відкрилося:': 'Idea, design, code and launch under my control — that’s how I build every project. Here’s what you unlocked:',
  'бонус за проходження · спробуйте натиснути': 'completion bonus · try to click it',
  'ЛЕГЕНДАРНИЙ · ПЛАТФОРМА': 'LEGENDARY · PLATFORM',
  'Платформа для ветеранського бізнесу: застосунок + веб · працює, доопрацьовується': 'A platform for veteran-owned businesses: app + web · live, in development',
  'РІДКІСНИЙ · САЙТ': 'RARE · WEBSITE', 'Сайт ГО · 2022 → редизайн 2026': 'NGO website · 2022 → redesign 2026',
  'НАСТУПНИЙ РІВЕНЬ': 'NEXT LEVEL', 'Ваш проєкт': 'Your project', 'Напишіть — і зберемо його разом.': 'Write to me and we’ll build it together.',
  'Зіграти ще раз': 'Play again', 'Далі →': 'Next →', 'ЗНИЖКУ ЗЛОВЛЕНО': 'DISCOUNT CAUGHT', '−20% на ваш проєкт': '−20% off your project',
  'Ваше ім’я': 'Your name', 'Email, Telegram або телефон': 'Email, Telegram or phone', 'Що створюємо': 'What are we building',
  'Мобільний застосунок': 'Mobile app', 'Віджет або чат-бот': 'Widget or chatbot', 'Дизайн без розробки': 'Design only, no development', 'Ще не знаю — порадьте': 'Not sure yet — advise me',
  'Коротко про ідею': 'The idea in brief', 'Сформувати заявку зі знижкою': 'Create a request with the discount',
  'Заявку з кодом NAIDA20 готово. Скопіюйте її і надішліть мені на': 'Your request with code NAIDA20 is ready. Copy it and send it to',
  'у Telegram': 'on Telegram', 'або зателефонуйте': 'or call', '— відповім з першими ідеями.': '— I’ll reply with first ideas.',
  'Надіслати на пошту': 'Send by email', 'Скопіювати заявку': 'Copy request', 'Змінити': 'Edit',

  /* ---------- концепції ---------- */
  'Концепції': 'Concepts', 'Концепції NaidaBureau': 'NaidaBureau concepts', '4 концепції сайту': '4 website concepts', 'Чотири способи сказати «вау»': 'Four ways to say “wow”',
  'Головна версія сайту — «Кіно і 3D». Інші три — альтернативні світи з тим самим змістом. Відкрийте кожну й порівняйте.': 'The main version of the site is “Cinema & 3D”. The other three are alternative worlds with the same content. Open each and compare.',
  'ГОЛОВНА': 'MAIN', 'Кіно і 3D': 'Cinema & 3D',
  'Тисячі частинок складаються у знак <N/> і перетікають у DESIGN, CODE, телефон і логотип. Реагують на мишку.': 'Thousands of particles form the <N/> mark and flow into DESIGN, CODE and the logo. They react to your mouse.',
  'Відкрити →': 'Open →',
  'Курсор «Наталія» збирає дизайн на очах, а відвідувач сам тягне шари, міняє кольори й бачить код.': 'The “Natalia” cursor builds a design before your eyes, then you drag layers, change colours and see the code yourself.',
  'Власна операційна система: завантаження, вікна, термінал з командами і проєкти як програми.': 'My own operating system: boot screen, windows, a terminal with commands and projects as apps.',
  'Чотири рівні процесу: ідея, дизайн, код, запуск. Наприкінці роботи відкриваються як нагорода.': 'Four levels of the process: idea, design, code, launch. At the end my work unlocks as a reward.',
};

/* шаблони для рядків, де є змінна частина */
const PATTERNS = [
  [/^Показати або сховати (.+)$/, (m, a) => 'Show or hide ' + tr(a)],
  [/^Сторінка: (.+?) · елементів: (\d+)$/, (m, a, n) => 'Page: ' + tr(a) + ' · elements: ' + n],
  [/^Івано-Франківськ (.+)$/, (m, a) => 'Ivano-Frankivsk ' + a],
  [/^РІВЕНЬ (\d+)$/, (m, n) => 'LEVEL ' + n],
  [/^акцент змінено на (.+)$/, (m, a) => 'accent changed to ' + a],
  [/^\/\* (.+) — змінюйте праворуч, код оновлюється \*\/$/, (m, a) => '/* ' + tr(a) + ' — edit on the right, the code updates */'],
  [/^([…→·•▸✕●\s]+)(.+)$/, (m, p, a) => { const r = tr(a); return r !== a ? p + r : m; }],
  [/^([^:\n]{1,40}):(\s*)(.*)$/, (m, a, s, b) => EN[a + ':'] ? EN[a + ':'] + s + b : m],
];

const KEY = 'nb-lang';
const q = new URLSearchParams(location.search).get('lang');
let lang = 'uk';
// за замовчуванням: українська, якщо браузер українською/російською або людина в Україні (часовий пояс); інакше — англійська
let tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
const auto = ((navigator.languages || [navigator.language || '']).some((l) => /^(uk|ru|be)/i.test(l)) || /Kiev|Kyiv|Uzhgorod|Zaporozhye|Simferopol/.test(tz)) ? 'uk' : 'en';
try { lang = q || localStorage.getItem(KEY) || auto; if (q) localStorage.setItem(KEY, q); } catch (e) { lang = q || auto; }
if (lang !== 'en') lang = 'uk';

function tr(s) {
  if (lang !== 'en' || !s) return s;
  if (EN[s] !== undefined) return EN[s];
  const t = s.trim();
  if (!t) return s;
  if (EN[t] !== undefined) return s.replace(t, EN[t]);
  if (t.includes('\n')) return s.split('\n').map((line) => { const lt = line.trim(); return lt ? line.replace(lt, tr(lt)) : line; }).join('\n');
  if (t.includes('\u00a0')) { const r = tr(t.replace(/\u00a0/g, ' ')); return r !== t.replace(/\u00a0/g, ' ') ? s.replace(t, r.replace(/ /g, '\u00a0')) : s; }
  for (const [re, fn] of PATTERNS) { const m = t.match(re); if (m) { const r = fn(...m); if (r !== m[0]) return s.replace(t, r); } }
  // складені рядки «а · б · в» — перекладаємо частини
  if (t.includes(' · ')) { const parts = t.split(' · '), out = parts.map((x) => tr(x)); if (out.some((x, i) => x !== parts[i])) return s.replace(t, out.join(' · ')); }
  return s;
}
window.T = tr;
window.LANG = lang;
document.documentElement.lang = lang === 'en' ? 'en' : 'uk';

const CYR = /[А-Яа-яІіЇїЄєҐґ]/;
const ATTRS = ['placeholder', 'aria-label', 'title', 'alt', 'data-l'];
function walk(root) {
  if (lang !== 'en') return;
  if (root.nodeType === 3) { if (CYR.test(root.nodeValue)) { const v = tr(root.nodeValue); if (v !== root.nodeValue) root.nodeValue = v; } return; }
  if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
  if (root.nodeType === 1) {
    if (root.tagName === 'SCRIPT' || root.tagName === 'STYLE') return;
    for (const a of ATTRS) { const v = root.getAttribute && root.getAttribute(a); if (v && CYR.test(v)) root.setAttribute(a, tr(v)); }
    if (root.tagName === 'META') { const c = root.getAttribute('content'); if (c && CYR.test(c)) root.setAttribute('content', tr(c)); }
  }
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let n; while ((n = tw.nextNode())) {
    if (n.nodeType === 3) { if (CYR.test(n.nodeValue) && n.parentNode && n.parentNode.tagName !== 'SCRIPT' && n.parentNode.tagName !== 'STYLE') { const v = tr(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; } }
    else for (const a of ATTRS) { const v = n.getAttribute(a); if (v && CYR.test(v)) n.setAttribute(a, tr(v)); }
  }
}

/* кнопка перемикання: будь-який елемент з атрибутом data-lang */
const css = `[data-lang]{font:inherit;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;letter-spacing:.04em;line-height:1;background:transparent;color:inherit;border:1px solid currentColor;border-radius:999px;padding:6px 9px;cursor:pointer;opacity:.85;white-space:nowrap}
[data-lang]:hover{opacity:1}
[data-lang] b{font-weight:700;color:#D7FF3D}`;
function setupButtons() {
  if (!document.getElementById('i18n-css')) { const st = document.createElement('style'); st.id = 'i18n-css'; st.textContent = css; document.head.appendChild(st); }
  document.querySelectorAll('[data-lang]').forEach((b) => {
    b.innerHTML = lang === 'en' ? '<b>EN</b> · UA' : '<b>UA</b> · EN';
    b.setAttribute('aria-label', lang === 'en' ? 'Language: English. Switch to Ukrainian (Українська)' : 'Мова: українська. Switch to English');
    b.onclick = () => { const next = lang === 'en' ? 'uk' : 'en'; try { localStorage.setItem(KEY, next); } catch (e) {} const u = new URL(location.href); u.searchParams.delete('lang'); if (next === 'en') u.searchParams.set('lang', 'en'); location.href = u.toString(); };
  });
}

function start() {
  setupButtons();
  if (lang !== 'en') return;
  document.title = tr(document.title);
  walk(document.head); walk(document.body);
  new MutationObserver((ms) => { for (const m of ms) {
    if (m.type === 'characterData') walk(m.target);
    else if (m.type === 'attributes') { const v = m.target.getAttribute(m.attributeName); if (v && CYR.test(v)) m.target.setAttribute(m.attributeName, tr(v)); }
    else m.addedNodes.forEach(walk);
  } }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  // щоб посилання між сторінками зберігали мову навіть без localStorage
  document.addEventListener('click', (e) => { const a = e.target.closest && e.target.closest('a[href$=".html"]'); if (a && !a.href.includes('lang=')) { a.href = a.href + (a.href.includes('?') ? '&' : '?') + 'lang=en'; } }, true);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
