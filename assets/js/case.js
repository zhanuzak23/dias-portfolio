/* ==========================================================================
   CASE.JS — страница одного кейса. Открывается как case.html?id=case-1
   Блоки собираются из массива blocks[] в content.js
   Поддерживаемые типы: text | list | image | gallery | quote | stats
   ========================================================================== */

(function () {
  "use strict";

  var D = window.CONTENT;
  var esc = UI.esc, has = UI.has, I = UI.ICONS;

  function getId() {
    var m = new URLSearchParams(window.location.search).get("id");
    return m || (D.cases[0] && D.cases[0].id);
  }

  /* ------------------------------------------------------------- БЛОКИ */
  var blockRenderers = {

    text: function (b) {
      var paras = (Array.isArray(b.body) ? b.body : [b.body]).map(function (p) {
        return "<p>" + esc(p) + "</p>";
      }).join("");
      return '<div class="block reveal">' +
               (has(b.title) ? '<h3 class="h3 block__head">' + esc(b.title) + "</h3>" : "") +
               '<div class="block__body' + (b.draft ? " draft" : "") + '">' + paras + "</div>" +
             "</div>";
    },

    list: function (b) {
      var items = (b.items || []).map(function (it) {
        return "<li>" + esc(it) + "</li>";
      }).join("");
      return '<div class="block reveal">' +
               (has(b.title) ? '<h3 class="h3 block__head">' + esc(b.title) + "</h3>" : "") +
               '<ul class="blocklist' + (b.draft ? " draft" : "") + '">' + items + "</ul>" +
             "</div>";
    },

    image: function (b) {
      var inner = has(b.src)
        ? '<img src="' + esc(b.src) + '" alt="' + esc(b.caption || "") + '" loading="lazy">'
        : UI.placeholder(b.hint, "Место для изображения");
      return '<figure class="figure block reveal">' +
               (has(b.title) ? '<h3 class="h3 block__head">' + esc(b.title) + "</h3>" : "") +
               '<div class="figure__frame"' + (has(b.src) ? "" : ' style="aspect-ratio:16/10"') + ">" + inner + "</div>" +
               (has(b.caption) ? '<figcaption class="figure__caption">' + esc(b.caption) + "</figcaption>" : "") +
             "</figure>";
    },

    gallery: function (b) {
      var cls = "gallery" + (b.columns === 3 ? " gallery--3" : "");
      var cells = (b.images || []).map(function (im) {
        var inner = has(im.src)
          ? '<img src="' + esc(im.src) + '" alt="' + esc(im.caption || "") + '" loading="lazy">'
          : UI.placeholder(im.hint, "Место для фото");
        return '<figure class="figure">' +
                 '<div class="figure__frame">' + inner + "</div>" +
                 (has(im.caption) ? '<figcaption class="figure__caption">' + esc(im.caption) + "</figcaption>" : "") +
               "</figure>";
      }).join("");
      return '<div class="block reveal">' +
               (has(b.title) ? '<h3 class="h3 block__head">' + esc(b.title) + "</h3>" : "") +
               '<div class="' + cls + '">' + cells + "</div>" +
             "</div>";
    },

    quote: function (b) {
      return '<div class="block reveal">' +
               '<blockquote class="quote' + (b.draft ? " draft" : "") + '">' + esc(b.body) +
                 (has(b.author) ? '<div class="quote__author">' + esc(b.author) + "</div>" : "") +
               "</blockquote>" +
             "</div>";
    },

    stats: function (b) {
      var cells = (b.items || []).map(function (s) {
        return '<div class="stats__item">' +
                 '<div class="stats__value">' + esc(s.value) + "</div>" +
                 '<div class="stats__label">' + esc(s.label) + "</div>" +
               "</div>";
      }).join("");
      return '<div class="block reveal">' +
               (has(b.title) ? '<h3 class="h3 block__head">' + esc(b.title) + "</h3>" : "") +
               '<div class="stats' + (b.draft ? " draft" : "") + '" style="margin-top:0">' + cells + "</div>" +
             "</div>";
    }
  };

  function renderBlock(b) {
    var fn = blockRenderers[b.type];
    return fn ? fn(b) : "";
  }

  /* -------------------------------------------------------------- ШАПКА */
  function caseHero(c) {
    var facts = (c.facts || []).map(function (f) {
      return '<div class="fact"><div class="fact__k">' + esc(f.k) + '</div><div class="fact__v">' + esc(f.v) + "</div></div>";
    }).join("");

    var cover = has(c.heroImage)
      ? '<img src="' + esc(c.heroImage) + '" alt="' + esc(c.title) + '">'
      : UI.placeholder(c.heroImageHint, "Обложка кейса");

    return '' +
      '<section class="casehero container">' +
        '<a class="backlink" href="index.html#cases">' + I.arrowLeft + " Все кейсы</a>" +
        '<div class="reveal">' +
          '<div class="casehero__meta"><span>' + esc(c.meta) + "</span><span>·</span><span>" + esc(c.year) + "</span></div>" +
          '<h1 class="display casehero__title' + (c.titleDraft ? " draft" : "") + '">' + esc(c.title) + "</h1>" +
          '<p class="lead casehero__lead' + (c.leadDraft ? " draft" : "") + '">' + esc(c.lead) + "</p>" +
        "</div>" +
        '<div class="casehero__cover reveal">' + cover + "</div>" +
        (facts ? '<div class="factlist reveal">' + facts + "</div>" : "") +
      "</section>";
  }

  /* --------------------------------------------------------- СЛЕД. КЕЙС */
  function nextCase(c) {
    var i = D.cases.findIndex(function (x) { return x.id === c.id; });
    var next = D.cases[(i + 1) % D.cases.length];
    if (!next || next.id === c.id) return "";
    return '' +
      '<section class="container">' +
        '<div class="nextcase reveal">' +
          "<div>" +
            '<div class="nextcase__label">Следующий кейс</div>' +
            '<a class="h3" href="case.html?id=' + esc(next.id) + '">' + esc(next.title) + "</a>" +
          "</div>" +
          '<a class="btn" href="case.html?id=' + esc(next.id) + '">Открыть ' + I.arrowRight + "</a>" +
        "</div>" +
      "</section>";
  }

  /* ------------------------------------------------------------- NOT FOUND */
  function notFound(id) {
    return '<section class="section container">' +
             '<a class="backlink" href="index.html#cases">' + I.arrowLeft + " Все кейсы</a>" +
             '<h1 class="display" style="margin-top:32px">Кейс не найден</h1>' +
             '<p class="lead" style="margin-top:16px">Нет кейса с id «' + esc(id) + '». ' +
             "Проверь список cases в файле assets/js/content.js.</p>" +
           "</section>";
  }

  /* -------------------------------------------------------------- RENDER */
  function render() {
    var id = getId();
    var c = D.cases.filter(function (x) { return x.id === id; })[0];

    UI.applyMeta(D, c ? c.title + " — " + D.person.name : "Кейс не найден");

    var main = c
      ? caseHero(c) +
        '<div class="container"><div class="blocks">' + (c.blocks || []).map(renderBlock).join("") + "</div></div>" +
        nextCase(c)
      : notFound(id);

    document.getElementById("app").innerHTML =
      UI.menubar(D) +
      "<main>" + main + "</main>" +
      UI.footer(D) +
      UI.toastEl() +
      UI.lightboxEl();

    UI.initBehaviour();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
