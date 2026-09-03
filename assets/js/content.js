/* ==========================================================================
   CONTENT.JS — единственный файл, который нужно править.
   --------------------------------------------------------------------------
   1. Пустая строка "" = на сайте появится заглушка («скоро» / «место для фото»).
      Вписал значение — заглушка исчезает сама.
   2. Картинки клади в assets/img/... и пиши путь от корня проекта:
      "assets/img/cases/case-1/cover.jpg"
   3. draft: true — метка «черновик» (кнопка в подвале сайта).
      Заменил текст на настоящий — ставь false.
   ========================================================================== */

window.CONTENT = {

  meta: {
    title: "Диас Жанұзақ — Product Designer",
    description: "Портфолио продуктового дизайнера. Кейсы, навыки, контакты.",
    url: "https://zhanuzak23.github.io/dias-portfolio/"
  },

  /* -------------------------------------------------------------- PERSON */
  person: {
    name:     "Диас Жанұзақ",
    initials: "ДЖ",
    role:     "Product Designer",

    photo:     "",            // фото в шапке, 800×1000
    photoHint: "800×1000",

    metaLine: "B2C, B2B  /  Web, Mobile",

    // одна строка — самое важное на сайте
    headline: "Проектирую интерфейсы, понятные людям и полезные бизнесу",
    headlineDraft: true,

    // одно предложение. Не нужно — оставь ""
    about: "Тестовое описание: чем занимаюсь и какие задачи беру.",
    aboutDraft: true,

    // 3–4 коротких чипа
    highlights: [
      "Продуктовое мышление",
      "Исследования",
      "Сложные интерфейсы",
      "Дизайн-системы"
    ]
  },

  /* ------------------------------------------------------------ CONTACTS */
  /* Пустая строка = контакт не показывается в меню-баре и гаснет в блоке    */
  /* контактов с пометкой «скоро».                                          */
  contacts: {
    phone:    "+7 708 175 39 74",
    email:    "",                   // напр. "dias@mail.com"
    telegram: "",                   // напр. "https://t.me/username"
    linkedin: "",                   // пришлёшь позже
    cv:       "",                   // напр. "assets/files/cv.pdf"
    behance:  "",
    dribbble: "",
    city:     "Алматы"
  },

  /* --------------------------------------------------------------- КЕЙСЫ */
  casesSection: { title: "Кейсы" },

  cases: [

    /* ===== КЕЙС 1 — заполнен полностью, работает как шаблон:
       здесь показаны все типы блоков страницы кейса ===================== */
    {
      id:    "case-1",
      title: "Case 1 — название проекта",
      titleDraft: true,
      meta:  "B2C  /  Web & Mobile",
      year:  "2025",
      desc:  "Тестовое описание: что за продукт и что изменилось.",
      descDraft: true,
      tags:  ["MVP", "Сценарии с ролями"],

      cover:     "",            // assets/img/cases/case-1/cover.jpg
      coverHint: "1200×800",

      // ——— страница кейса ———
      lead: "Тестовый лид: контекст проекта в двух предложениях.",
      leadDraft: true,

      heroImage:     "",        // широкая обложка на странице кейса
      heroImageHint: "1920×1080",

      facts: [
        { k: "Роль",      v: "Product Designer" },
        { k: "Команда",   v: "PM, 2 разработчика" },
        { k: "Срок",      v: "3 месяца" },
        { k: "Платформы", v: "Web, iOS, Android" }
      ],

      blocks: [
        {
          type: "text",
          title: "Задача",
          body: [
            "Тестовый текст: что было не так и что просил бизнес.",
            "Второй абзац: ограничения — сроки, легаси, дизайн-система."
          ],
          draft: true
        },
        {
          type: "list",
          title: "Что сделал",
          items: [
            "Тестовый пункт: интервью с пользователями",
            "Тестовый пункт: CJM и узкие места сценария",
            "Тестовый пункт: прототип и тест на 8 респондентах",
            "Тестовый пункт: передача в разработку"
          ],
          draft: true
        },
        { type: "image", src: "", hint: "1600×1000", caption: "Подпись к изображению" },
        {
          type: "text",
          title: "Решение",
          body: ["Тестовый текст: как устроено решение и почему именно так."],
          draft: true
        },
        {
          type: "gallery",
          title: "Экраны",
          columns: 2,             // 2 или 3
          images: [
            { src: "", hint: "1200×900", caption: "Экран 1" },
            { src: "", hint: "1200×900", caption: "Экран 2" },
            { src: "", hint: "1200×900", caption: "Экран 3" },
            { src: "", hint: "1200×900", caption: "Экран 4" }
          ]
        },
        {
          type: "quote",
          body: "Тестовая цитата: отзыв заказчика или вывод из исследования.",
          author: "Имя, должность",
          draft: true
        },
        {
          type: "stats",
          title: "Результат",
          items: [
            { value: "+00%", label: "тестовая метрика" },
            { value: "−00%", label: "тестовая метрика" },
            { value: "00",   label: "тестовая метрика" },
            { value: "00",   label: "тестовая метрика" }
          ],
          draft: true
        }
      ]
    },

    /* ===== КЕЙС 2 ===================================================== */
    {
      id: "case-2",
      title: "Case 2 — название проекта",
      titleDraft: true,
      meta: "B2B  /  Web",
      year: "2024",
      desc: "Тестовое описание: контекст, задача, эффект.",
      descDraft: true,
      tags: ["Личный кабинет", "Роли и права"],
      cover: "", coverHint: "1200×800",

      lead: "Тестовый лид: контекст проекта в двух предложениях.",
      leadDraft: true,
      heroImage: "", heroImageHint: "1920×1080",
      facts: [
        { k: "Роль", v: "Product Designer" },
        { k: "Команда", v: "PM, команда разработки" },
        { k: "Срок", v: "2 месяца" },
        { k: "Платформы", v: "Web" }
      ],
      blocks: [
        { type: "text",  title: "Задача",     body: ["Тестовый текст: бизнес-задача."], draft: true },
        { type: "list",  title: "Что сделал", items: ["Тестовый пункт 1", "Тестовый пункт 2", "Тестовый пункт 3"], draft: true },
        { type: "image", src: "", hint: "1600×1000", caption: "Подпись к изображению" },
        { type: "text",  title: "Решение",    body: ["Тестовый текст: как устроено решение."], draft: true },
        { type: "gallery", title: "Экраны", columns: 2, images: [
          { src: "", hint: "1200×900", caption: "Экран 1" },
          { src: "", hint: "1200×900", caption: "Экран 2" }
        ]},
        { type: "text",  title: "Результат",  body: ["Тестовый текст с цифрами."], draft: true }
      ]
    },

    /* ===== КЕЙС 3 ===================================================== */
    {
      id: "case-3",
      title: "Case 3 — название проекта",
      titleDraft: true,
      meta: "B2C  /  Mobile app",
      year: "2024",
      desc: "Тестовое описание: контекст, задача, эффект.",
      descDraft: true,
      tags: ["A/B-тест", "Онбординг"],
      cover: "", coverHint: "1200×800",

      lead: "Тестовый лид: контекст проекта в двух предложениях.",
      leadDraft: true,
      heroImage: "", heroImageHint: "1920×1080",
      facts: [
        { k: "Роль", v: "Product Designer" },
        { k: "Команда", v: "PM, аналитик, 3 разработчика" },
        { k: "Срок", v: "6 недель" },
        { k: "Платформы", v: "iOS, Android" }
      ],
      blocks: [
        { type: "text",  title: "Задача",     body: ["Тестовый текст: бизнес-задача."], draft: true },
        { type: "list",  title: "Что сделал", items: ["Тестовый пункт 1", "Тестовый пункт 2", "Тестовый пункт 3"], draft: true },
        { type: "image", src: "", hint: "1600×1000", caption: "Подпись к изображению" },
        { type: "text",  title: "Решение",    body: ["Тестовый текст: как устроено решение."], draft: true },
        { type: "gallery", title: "Экраны", columns: 3, images: [
          { src: "", hint: "900×1200", caption: "Экран 1" },
          { src: "", hint: "900×1200", caption: "Экран 2" },
          { src: "", hint: "900×1200", caption: "Экран 3" }
        ]},
        { type: "text",  title: "Результат",  body: ["Тестовый текст с цифрами."], draft: true }
      ]
    },

    /* ===== КЕЙС 4 ===================================================== */
    {
      id: "case-4",
      title: "Case 4 — название проекта",
      titleDraft: true,
      meta: "B2B  /  Web",
      year: "2023",
      desc: "Тестовое описание: контекст, задача, эффект.",
      descDraft: true,
      tags: ["Дизайн-система", "Компоненты"],
      cover: "", coverHint: "1200×800",

      lead: "Тестовый лид: контекст проекта в двух предложениях.",
      leadDraft: true,
      heroImage: "", heroImageHint: "1920×1080",
      facts: [
        { k: "Роль", v: "Product Designer" },
        { k: "Команда", v: "2 дизайнера, фронтенд" },
        { k: "Срок", v: "4 месяца" },
        { k: "Платформы", v: "Web" }
      ],
      blocks: [
        { type: "text",  title: "Задача",     body: ["Тестовый текст: бизнес-задача."], draft: true },
        { type: "list",  title: "Что сделал", items: ["Тестовый пункт 1", "Тестовый пункт 2", "Тестовый пункт 3"], draft: true },
        { type: "image", src: "", hint: "1600×1000", caption: "Подпись к изображению" },
        { type: "gallery", title: "Компоненты", columns: 2, images: [
          { src: "", hint: "1200×900", caption: "Экран 1" },
          { src: "", hint: "1200×900", caption: "Экран 2" }
        ]},
        { type: "text",  title: "Результат",  body: ["Тестовый текст с цифрами."], draft: true }
      ]
    },

    /* ===== КЕЙС 5 ===================================================== */
    {
      id: "case-5",
      title: "Case 5 — название проекта",
      titleDraft: true,
      meta: "Концепт  /  Web",
      year: "2023",
      desc: "Тестовое описание: контекст, задача, эффект.",
      descDraft: true,
      tags: ["Концепт", "Визуал"],
      cover: "", coverHint: "1200×800",

      lead: "Тестовый лид: контекст проекта в двух предложениях.",
      leadDraft: true,
      heroImage: "", heroImageHint: "1920×1080",
      facts: [
        { k: "Роль", v: "Product Designer" },
        { k: "Команда", v: "Соло" },
        { k: "Срок", v: "3 недели" },
        { k: "Платформы", v: "Web" }
      ],
      blocks: [
        { type: "text",  title: "Идея",       body: ["Тестовый текст: из чего родился концепт."], draft: true },
        { type: "list",  title: "Что сделал", items: ["Тестовый пункт 1", "Тестовый пункт 2", "Тестовый пункт 3"], draft: true },
        { type: "image", src: "", hint: "1600×1000", caption: "Подпись к изображению" },
        { type: "gallery", title: "Визуал", columns: 2, images: [
          { src: "", hint: "1200×900", caption: "Экран 1" },
          { src: "", hint: "1200×900", caption: "Экран 2" }
        ]},
        { type: "text",  title: "Вывод",      body: ["Тестовый текст: что получилось."], draft: true }
      ]
    }
  ],

  /* -------------------------------------------------------------- СКИЛЛЫ */
  skills: {
    title: "Скиллы",

    groupsLabel: "Навыки",
    groups: [
      { title: "Продукт", items: ["Product thinking", "Исследования", "CJM и user flow", "Работа с метриками"] },
      { title: "Дизайн",  items: ["UX/UI дизайн", "Дизайн-системы", "Прототипирование", "Адаптив"] },
      { title: "Команда", items: ["Работа с фидбеком", "Дизайн-ревью", "Передача в разработку", "Презентация решений"] }
    ],

    toolsLabel: "Инструменты",
    tools: ["Figma", "FigJam", "Maze", "Lottie", "Framer", "Miro"],

    experienceLabel: "Опыт",
    experience: [
      { role: "Product Designer", company: "Компания", years: "2024 — н.в." },
      { role: "Product Designer", company: "Компания", years: "2023 — 2024" },
      { role: "UI/UX Designer",   company: "Компания", years: "2022 — 2023" },
      { role: "Web Designer",     company: "Фриланс",  years: "2021" }
    ],
    experienceDraft: true,

    educationLabel: "Образование",
    education: [
      { role: "Направление обучения", company: "Учебное заведение", years: "2021 — 2025" }
    ],
    educationDraft: true
  },

  /* ------------------------------------------------------------ КОНТАКТЫ */
  contactsSection: { title: "Контакты" },

  footer: { note: "© 2026" }
};
