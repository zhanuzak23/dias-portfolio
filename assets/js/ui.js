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
      '<svg class="ico" ' + S + '><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    close:
      '<svg class="ico" ' + S + '><path d="M6 6 18 18M18 6 6 18"/></svg>',
    chevronLeft:
      '<svg class="ico" ' + S + '><path d="M14.5 5.5 8 12l6.5 6.5"/></svg>',
    chevronRight:
      '<svg class="ico" ' + S + '><path d="M9.5 5.5 16 12l-6.5 6.5"/></svg>',

    /* навыки и инструменты */
    target:
      '<svg class="ico" ' + S + '><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></svg>',
    pen:
      '<svg class="ico" ' + S + '><path d="M12 19.5 19.5 12 22 14.5 14.5 22z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
    users:
      '<svg class="ico" ' + S + '><circle cx="9" cy="8" r="3.25"/><path d="M3 19.5a6 6 0 0 1 12 0"/><path d="M15.5 4.9a3.25 3.25 0 0 1 0 6.2M17.5 14.2a6 6 0 0 1 3.5 5.3"/></svg>',
    figma:
      '<svg class="ico" ' + S + '><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 9h16M9 9v11"/></svg>',
    figjam:
      '<svg class="ico" ' + S + '><path d="M5 4h14v10l-6 6H5z"/><path d="M13 20v-6h6"/></svg>',
    terminal:
      '<svg class="ico" ' + S + '><rect x="3" y="4.5" width="18" height="15" rx="3"/><path d="m7.5 10 2.5 2-2.5 2M12.5 14.5h4"/></svg>',
    kanban:
      '<svg class="ico" ' + S + '><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M15 4v16M5.5 8h1.5M11 8h1.5M11 11.5h1.5M17 8h1.5"/></svg>',
    board:
      '<svg class="ico" ' + S + '><rect x="3" y="4" width="18" height="13" rx="2.5"/><path d="M7 13l3-3 2.5 2L17 8M8 21l2-4M16 21l-2-4"/></svg>',
    hash:
      '<svg class="ico" ' + S + '><path d="M9.5 4 7.5 20M16.5 4l-2 16M4.5 9h16M3.5 15h16"/></svg>',
    cloud:
      '<svg class="ico" ' + S + '><path d="M7 18.5h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 9.6 4.5 4.5 0 0 0 7 18.5Z"/></svg>',
    chat:
      '<svg class="ico" ' + S + '><path d="M20.5 11.5a8 8 0 0 1-11.8 7L3.5 20l1.5-4.7A8 8 0 1 1 20.5 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></svg>'
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
  function placeholder(hint, title) {
    return '' +
      '<div class="ph">' +
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

    /* пустые контакты не показываем вообще */
    return out.filter(function (it) { return has(it.value); });
  }

  function prettyUrl(u) {
    return String(u).replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  }

  /* ----------------------------------------------------------- МЕНЮ-БАР */
  function menubar(data) {
    var c = data.contacts;

    var nav = [
      { t: "Кейсы",    href: "index.html#cases" },
      { t: "Навыки",   href: "index.html#skills" },
      { t: "Контакты", href: "index.html#contacts" }
    ].map(function (l) {
      return '<a class="menubar__link" href="' + esc(l.href) + '">' + esc(l.t) + "</a>";
    }).join("");

    /* справа: Telegram для связи и кнопка CV. Пустое — не показывается */
    var tg = has(c.telegram)
      ? '<a class="menubar__btn menubar__btn--tg" data-tip="Написать в Telegram" href="' + esc(c.telegram) +
        '" target="_blank" rel="noopener" aria-label="Написать в Telegram">' + ICONS.telegram + "</a>"
      : "";
    var cv = has(c.cv)
      ? '<a class="menubar__cta" href="' + esc(c.cv) + '" target="_blank" rel="noopener">' +
        ICONS.download + "<span>CV</span></a>"
      : "";
    var btns = tg;
    var cta = cv;

    return '' +
      '<header class="menubar" id="menubar">' +
        '<div class="container menubar__inner">' +
          '<a class="menubar__brand" href="index.html">' +
            '<span class="menubar__dot"></span>' +
            "<span>" + esc(data.person.name) + "</span>" +
            '<span class="menubar__role">' + esc(data.person.role) + "</span>" +
          "</a>" +
          '<nav class="menubar__nav">' + nav + "</nav>" +
          '<span class="menubar__sep"></span>' +
          '<div class="menubar__actions">' + btns + cta + "</div>" +
        "</div>" +
      "</header>";
  }

  function toastEl() {
    return '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  }

  /* ---------------------------------------------------------- LIGHTBOX */
  function lightboxEl() {
    return '' +
      '<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Просмотр изображения">' +
        '<div class="lightbox__scroll" data-close>' +
          '<img class="lightbox__img" id="lightboxImg" alt="">' +
        "</div>" +
        '<span class="lightbox__hint">Клик по картинке — реальный размер · Esc — закрыть</span>' +
        '<button class="lightbox__btn lightbox__close" data-lb="close" aria-label="Закрыть">' + ICONS.close + "</button>" +
        '<button class="lightbox__btn lightbox__prev" data-lb="prev" aria-label="Предыдущая">' + ICONS.chevronLeft + "</button>" +
        '<button class="lightbox__btn lightbox__next" data-lb="next" aria-label="Следующая">' + ICONS.chevronRight + "</button>" +
        '<div class="lightbox__bar">' +
          '<span class="lightbox__cap" id="lightboxCap"></span>' +
          '<span class="lightbox__count" id="lightboxCount"></span>' +
        "</div>" +
      "</div>";
  }

  function initLightbox() {
    var box = qs("#lightbox");
    if (!box) return;

    var imgEl = qs("#lightboxImg");
    var capEl = qs("#lightboxCap");
    var cntEl = qs("#lightboxCount");
    var items = [].slice.call(document.querySelectorAll(".figure__frame img"));
    if (!items.length) return;

    var i = 0;
    var lastFocus = null;

    function captionOf(img) {
      var fig = img.closest("figure");
      var cap = fig && fig.querySelector(".figure__caption");
      return cap ? cap.textContent : (img.getAttribute("alt") || "");
    }

    function show(n) {
      i = (n + items.length) % items.length;
      var src = items[i];
      box.classList.remove("is-zoom");
      imgEl.src = src.currentSrc || src.src;
      imgEl.alt = src.alt || "";
      capEl.textContent = captionOf(src);
      cntEl.textContent = i + 1 + " / " + items.length;
      box.querySelector(".lightbox__scroll").scrollTop = 0;
    }

    function open(n) {
      lastFocus = document.activeElement;
      show(n);
      box.classList.add("is-on");
      document.body.style.overflow = "hidden";
      box.querySelector(".lightbox__close").focus();
    }

    function close() {
      box.classList.remove("is-on", "is-zoom");
      document.body.style.overflow = "";
      imgEl.removeAttribute("src");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    items.forEach(function (img, n) {
      var frame = img.closest(".figure__frame");
      if (!frame) return;
      frame.setAttribute("role", "button");
      frame.setAttribute("tabindex", "0");
      frame.setAttribute("aria-label", "Открыть изображение");
      frame.addEventListener("click", function () { open(n); });
      frame.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(n); }
      });
    });

    box.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-lb]");
      if (btn) {
        var a = btn.getAttribute("data-lb");
        if (a === "close") close();
        if (a === "prev") show(i - 1);
        if (a === "next") show(i + 1);
        return;
      }
      /* клик по самой картинке — переключение реального размера */
      if (e.target === imgEl) { box.classList.toggle("is-zoom"); return; }
      /* клик по фону — закрыть */
      if (e.target.hasAttribute("data-close")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-on")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(i - 1);
      if (e.key === "ArrowRight") show(i + 1);
    });
  }

  /* ------------------------------------------------------------ ПОДВАЛ */
  function footer(data) {
    return '' +
      '<footer class="footer">' +
        '<div class="container footer__inner">' +
          '<span class="footer__note">' + esc(data.footer.note) + '</span>' +
          '<span class="footer__note">' + esc(data.contacts.city) + '</span>' +
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

    /* липкий меню-бар */
    var bar = qs("#menubar");
    if (bar) {
      var onScroll = function () { bar.classList.toggle("is-stuck", window.scrollY > 8); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
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

    initLightbox();

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

    if (has(data.meta.url)) {
      var og = document.querySelector('meta[property="og:url"]');
      if (!og) {
        og = document.createElement("meta");
        og.setAttribute("property", "og:url");
        document.head.appendChild(og);
      }
      og.setAttribute("content", data.meta.url);
    }
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
    menubar: menubar,
    toastEl: toastEl,
    lightboxEl: lightboxEl,
    footer: footer,
    toast: toast,
    copyText: copyText,
    initBehaviour: initBehaviour,
    applyMeta: applyMeta
  };
})(window);
