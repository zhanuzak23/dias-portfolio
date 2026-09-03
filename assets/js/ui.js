/* ==========================================================================
   UI.JS — иконки, помощники и общие блоки (шапка, док, тосты, анимации).
   Этот файл трогать не нужно — весь контент лежит в content.js
   ========================================================================== */

(function (global) {
  "use strict";

  /* ------------------------------------------------------------- ИКОНКИ */
  var S = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

  var ICONS = {
    phone:
      '<svg class="ico" ' + S + '><path d="M5.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L15 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3Z"/></svg>',
    mail:
      '<svg class="ico" ' + S + '><rect x="2.75" y="4.75" width="18.5" height="14.5" rx="3"/><path d="m3.5 7.5 7.4 5.1a2 2 0 0 0 2.2 0l7.4-5.1"/></svg>',
    telegram:
      '<svg class="ico" ' + S + '><path d="M21 4.5 2.9 11.3c-.8.3-.8 1.4 0 1.7l4.4 1.5 1.7 5c.3.8 1.3 1 1.8.3l2.3-2.8 4.4 3.2c.7.5 1.6.1 1.8-.7L22 5.6c.2-.9-.6-1.5-1-1.1Z"/><path d="m7.3 14.5 10-7.6-6.6 8.5"/></svg>',
    linkedin:
      '<svg class="ico" ' + S + '><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7.5 10.5v6M7.5 7.6v.1M11.5 16.5v-6M11.5 13a2.5 2.5 0 0 1 5 0v3.5"/></svg>',
    doc:
      '<svg class="ico" ' + S + '><path d="M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8l-5-5Z"/><path d="M14 3v3.5A1.5 1.5 0 0 0 15.5 8H19"/><path d="M8.5 13h7M8.5 16.5h4.5"/></svg>',
    download:
      '<svg class="ico" ' + S + '><path d="M12 3.5v10.5m0 0 3.5-3.5M12 14l-3.5-3.5"/><path d="M4.5 16v2.5A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 2-2V16"/></svg>',
    behance:
      '<svg class="ico" ' + S + '><path d="M2.5 6.5h5a2.5 2.5 0 0 1 0 5h-5Zm0 5h5.5a2.75 2.75 0 0 1 0 5.5H2.5Z"/><path d="M14 14.5h7a3.5 3.5 0 1 0-7 0Zm.8 2.4a3.5 3.5 0 0 0 5.4.4"/><path d="M15.5 6.8h4.5"/></svg>',
    dribbble:
      '<svg class="ico" ' + S + '><circle cx="12" cy="12" r="9"/><path d="M4.4 8.2c5 .6 10.4-.5 13.9-3M3.6 14.4c4.6-2.4 10.6-1.7 14.9 1.9M8.6 3.6C12 7.6 14.2 12.6 14.8 20"/></svg>',
    arrowUpRight:
      '<svg class="ico ico--sm" ' + S + '><path d="M8 16 16 8m0 0h-6m6 0v6"/></svg>',
    arrowLeft:
      '<svg class="ico ico--sm" ' + S + '><path d="M19 12H5m0 0 5.5-5.5M5 12l5.5 5.5"/></svg>',
    arrowRight:
      '<svg class="ico ico--sm" ' + S + '><path d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5"/></svg>',
    image:
      '<svg class="ico" ' + S + '><rect x="3" y="4.5" width="18" height="15" rx="3"/><circle cx="8.75" cy="9.75" r="1.5"/><path d="m3.5 17 4.4-4.4a2 2 0 0 1 2.7 0l3.6 3.5m0 0 1.7-1.6a2 2 0 0 1 2.7 0l1.9 1.8m-6.3-.2 1.4 1.4"/></svg>',
    copy:
      '<svg class="ico ico--sm" ' + S + '><rect x="8.5" y="8.5" width="12" height="12" rx="3"/><path d="M15.5 5.5A2 2 0 0 0 13.5 3.5h-7a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2"/></svg>',
    check:
      '<svg class="ico ico--sm" ' + S + '><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
    grid:
      '<svg class="ico" ' + S + '><circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="7" r="2.2"/><circle cx="7" cy="17" r="2.2"/><circle cx="17" cy="17" r="2.2"/></svg>',
    sparkle:
      '<svg class="ico" ' + S + '><path d="M12 3.5c.6 3.6 1.9 5 5.5 5.5-3.6.6-4.9 1.9-5.5 5.5-.6-3.6-1.9-4.9-5.5-5.5 3.6-.5 4.9-1.9 5.5-5.5Z"/><path d="M17.5 15c.3 1.8 1 2.5 2.8 2.8-1.8.3-2.5 1-2.8 2.7-.3-1.8-1-2.4-2.7-2.7 1.7-.3 2.4-1 2.7-2.8Z"/></svg>',
    user:
      '<svg class="ico" ' + S + '><circle cx="12" cy="8.5" r="3.75"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
    pin:
      '<svg class="ico" ' + S + '><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>'
  };

  /* ------------------------------------------------------------ ХЕЛПЕРЫ */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function has(v) { return typeof v === "string" ? v.trim().length > 0 : !!v; }

  function draftAttr(flag) { return flag ? ' class="draft"' : ""; }

  function qs(sel, root) { return (root || document).querySelector(sel); }

  /** Заглушка «место для фото». Показывается, пока src пустой. */
  function placeholder(hint, title, isStatic) {
    return '' +
      '<div class="ph' + (isStatic ? " ph--static" : "") + '">' +
        '<span class="ph__ico">' + ICONS.image + '</span>' +
        '<span class="ph__title">' + esc(title || "Место для фото") + '</span>' +
        (has(hint) ? '<span class="ph__hint">' + esc(hint) + '</span>' : "") +
      '</div>';
  }

  /** Картинка или заглушка. */
  function media(src, alt, hint, phTitle) {
    return has(src)
      ? '<img src="' + esc(src) + '" alt="' + esc(alt || "") + '" loading="lazy">'
      : placeholder(hint, phTitle);
  }

  /* --------------------------------------------------------- КОНТАКТЫ */
  /**
   * Приводит contacts из content.js к единому списку кнопок.
   * action: "link" — обычная ссылка, "copy" — копирует в буфер.
   */
  function contactList(c) {
    var out = [];

    out.push({
      key: "cv", label: "CV", value: has(c.cv) ? "Скачать PDF" : "",
      icon: ICONS.doc, action: "link", href: c.cv, download: true
    });
    out.push({
      key: "linkedin", label: "LinkedIn", value: has(c.linkedin) ? prettyUrl(c.linkedin) : "",
      icon: ICONS.linkedin, action: "link", href: c.linkedin
    });
    out.push({
      key: "telegram", label: "Telegram", value: has(c.telegram) ? prettyUrl(c.telegram) : "",
      icon: ICONS.telegram, action: "link", href: c.telegram
    });
    out.push({
      key: "email", label: "E-mail", value: c.email,
      icon: ICONS.mail, action: "copy", copy: c.email, href: has(c.email) ? "mailto:" + c.email : ""
    });
    out.push({
      key: "phone", label: "Телефон", value: c.phone,
      icon: ICONS.phone, action: "copy", copy: c.phone, href: has(c.phone) ? "tel:" + c.phone.replace(/[^\d+]/g, "") : ""
    });

    if (has(c.behance))  out.push({ key: "behance",  label: "Behance",  value: prettyUrl(c.behance),  icon: ICONS.behance,  action: "link", href: c.behance });
    if (has(c.dribbble)) out.push({ key: "dribbble", label: "Dribbble", value: prettyUrl(c.dribbble), icon: ICONS.dribbble, action: "link", href: c.dribbble });

    return out;
  }

  function prettyUrl(u) {
    return String(u).replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  }

  /* ------------------------------------------------------------ ШАПКА */
  function topbar(data) {
    var c = data.contacts;
    var links = [
      { t: "Кейсы",    href: "index.html#cases",    always: true },
      { t: "Скиллы",   href: "index.html#skills",   always: true },
      { t: "Контакты", href: "index.html#contacts", always: true },
      { t: "CV",       href: c.cv },
      { t: "LinkedIn", href: c.linkedin }
    ];

    var nav = links.map(function (l) {
      if (l.always) return '<a class="topnav__link" href="' + esc(l.href) + '">' + esc(l.t) + '</a>';
      if (has(l.href)) {
        return '<a class="topnav__link" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.t) + '</a>';
      }
      return '<span class="topnav__link is-soon" title="Скоро добавлю">' + esc(l.t) + ' · скоро</span>';
    }).join("");

    return '' +
      '<header class="topbar" id="topbar">' +
        '<div class="container topbar__inner">' +
          '<a class="brand" href="index.html">' +
            '<span class="brand__dot"></span>' +
            '<span>' + esc(data.person.name) + '</span>' +
            '<span class="brand__role">— ' + esc(data.person.role) + '</span>' +
          '</a>' +
          '<nav class="topnav">' + nav + '</nav>' +
        '</div>' +
      '</header>';
  }

  /* -------------------------------------------------------------- ДОК */
  function dock(data) {
    var c = data.contacts;
    var items = contactList(c);
    var primary = has(c.telegram)
      ? { href: c.telegram, ext: true }
      : (has(c.email) ? { href: "mailto:" + c.email, ext: false } : null);

    var cta = primary
      ? '<a class="dock__cta" href="' + esc(primary.href) + '"' + (primary.ext ? ' target="_blank" rel="noopener"' : "") + '>' +
          ICONS.sparkle + '<span>Связаться</span></a>'
      : '<a class="dock__cta" href="index.html#contacts">' + ICONS.sparkle + '<span>Связаться</span></a>';

    var btns = items.map(function (it) {
      var soon = !has(it.value);
      if (soon) {
        return '<button class="dock__btn" data-tip="' + esc(it.label) + ' · скоро" disabled aria-label="' + esc(it.label) + ' скоро">' + it.icon + '</button>';
      }
      if (it.action === "copy") {
        return '<button class="dock__btn" data-tip="' + esc(it.value) + '" data-copy="' + esc(it.copy) + '" aria-label="Скопировать ' + esc(it.label) + '">' + it.icon + '</button>';
      }
      return '<a class="dock__btn" data-tip="' + esc(it.label) + '" href="' + esc(it.href) + '" target="_blank" rel="noopener" aria-label="' + esc(it.label) + '">' + it.icon + '</a>';
    }).join("");

    var avatar = has(data.person.photo)
      ? '<span class="dock__avatar"><img src="' + esc(data.person.photo) + '" alt=""></span>'
      : '<span class="dock__avatar">' + esc(data.person.initials) + '</span>';

    return '' +
      '<div class="dock" id="dock">' +
        cta +
        '<span class="dock__sep"></span>' +
        btns +
        '<span class="dock__sep dock__sep--tail"></span>' +
        avatar +
      '</div>' +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  }

  /* ------------------------------------------------------------ ПОДВАЛ */
  function footer(data) {
    return '' +
      '<footer class="footer">' +
        '<div class="container footer__inner">' +
          '<span class="footer__note">' + esc(data.footer.note) + '</span>' +
          '<span class="footer__note">' + esc(data.contacts.city) + '</span>' +
          '<button class="footer__note" id="draftToggle" style="text-decoration:underline;text-underline-offset:3px">показать черновики</button>' +
        '</div>' +
      '</footer>';
  }

  /* ------------------------------------------------------- ПОВЕДЕНИЕ */
  function toast(msg) {
    var t = qs("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("is-on"); }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () { toast("Скопировано: " + text); },
        function () { legacyCopy(text); }
      );
    } else {
      legacyCopy(text);
    }
  }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    toast(ok ? "Скопировано: " + text : text + " — скопируй вручную");
  }

  function initBehaviour() {
    /* копирование */
    document.addEventListener("click", function (e) {
      var el = e.target.closest("[data-copy]");
      if (!el) return;
      e.preventDefault();
      copyText(el.getAttribute("data-copy"));
    });

    /* липкая шапка */
    var bar = qs("#topbar");
    if (bar) {
      var onScroll = function () { bar.classList.toggle("is-stuck", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* док прячется в самом низу страницы, чтобы не перекрывать подвал */
    var d = qs("#dock");
    if (d) {
      var onDock = function () {
        var bottom = window.scrollY + window.innerHeight;
        d.classList.toggle("is-hidden", bottom > document.body.scrollHeight - 60);
      };
      onDock();
      window.addEventListener("scroll", onDock, { passive: true });
      window.addEventListener("resize", onDock);
    }

    /* появление блоков при скролле */
    var nodes = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && nodes.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
      nodes.forEach(function (n) { io.observe(n); });
    } else {
      nodes.forEach(function (n) { n.classList.add("is-in"); });
    }

    /* переключатель «черновики» */
    var dt = qs("#draftToggle");
    if (dt) {
      var saved = localStorage.getItem("showDraft") === "1";
      document.body.classList.toggle("show-draft", saved);
      dt.textContent = saved ? "скрыть черновики" : "показать черновики";
      dt.addEventListener("click", function () {
        var on = document.body.classList.toggle("show-draft");
        localStorage.setItem("showDraft", on ? "1" : "0");
        dt.textContent = on ? "скрыть черновики" : "показать черновики";
      });
    }
  }

  /* мета-теги страницы из content.js */
  function applyMeta(data, pageTitle) {
    document.title = pageTitle || data.meta.title;
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", data.meta.description);
  }

  global.UI = {
    ICONS: ICONS,
    esc: esc,
    has: has,
    draftAttr: draftAttr,
    placeholder: placeholder,
    media: media,
    contactList: contactList,
    prettyUrl: prettyUrl,
    topbar: topbar,
    dock: dock,
    footer: footer,
    toast: toast,
    copyText: copyText,
    initBehaviour: initBehaviour,
    applyMeta: applyMeta
  };
})(window);
