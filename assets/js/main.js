/* ==========================================================================
   MAIN.JS — сборка главной страницы из content.js
   Порядок блоков: Hero → Кейсы → Скиллы → Контакты
   ========================================================================== */

(function () {
  "use strict";

  var D = window.CONTENT;
  var esc = UI.esc, has = UI.has, I = UI.ICONS;

  /* --------------------------------------------------------------- HERO */
  function hero() {
    var p = D.person;

    var metaLines = (p.metaLines || []).map(function (l) {
      return "<span>" + esc(l) + "</span>";
    }).join("");

    var chips = (p.highlights || []).map(function (h) {
      return '<span class="chip">' + esc(h) + "</span>";
    }).join("");

    var stats = (p.stats && p.stats.length)
      ? '<div class="stats reveal">' + p.stats.map(function (s) {
          return '<div class="stats__item">' +
                   '<div class="stats__value">' + esc(s.value) + "</div>" +
                   '<div class="stats__label">' + esc(s.label) + "</div>" +
                 "</div>";
        }).join("") + "</div>"
      : "";

    return '' +
      '<section class="hero container" id="top">' +
        '<div class="hero__grid">' +
          '<div class="hero__photo reveal">' +
            UI.media(p.photo, p.name, p.photoHint, "Фото в hero") +
          "</div>" +
          '<div class="reveal">' +
            '<div class="hero__meta">' + metaLines + "</div>" +
            '<h1 class="display hero__title' + (p.headlineDraft ? " draft" : "") + '">' + esc(p.headline) + "</h1>" +
            '<p class="lead hero__about' + (p.aboutDraft ? " draft" : "") + '">' + esc(p.about) + "</p>" +
            '<div class="chips">' + chips + "</div>" +
          "</div>" +
        "</div>" +
        stats +
      "</section>";
  }

  /* -------------------------------------------------------------- КЕЙСЫ */
  function cases() {
    var s = D.casesSection;

    var list = D.cases.map(function (c, i) {
      var tags = (c.tags || []).map(function (t) {
        return '<span class="chip chip--ghost">' + esc(t) + "</span>";
      }).join("");

      var num = String(i + 1).padStart(2, "0");

      return '' +
        '<a class="case reveal" href="case.html?id=' + esc(c.id) + '">' +
          '<div class="case__media">' +
            UI.media(c.cover, c.title, c.coverHint, "Обложка кейса " + num) +
          "</div>" +
          '<div class="case__body">' +
            '<div class="case__top">' +
              '<span class="case__meta">' + esc(c.meta) + "</span>" +
              '<span class="case__year">' + esc(c.year) + "</span>" +
            "</div>" +
            '<h3 class="case__title' + (c.titleDraft ? " draft" : "") + '">' + esc(c.title) + "</h3>" +
            '<p class="case__desc' + (c.descDraft ? " draft" : "") + '">' + esc(c.desc) + "</p>" +
            '<div class="case__tags">' + tags + "</div>" +
            '<span class="case__cta">Смотреть кейс ' + I.arrowUpRight + "</span>" +
          "</div>" +
        "</a>";
    }).join("");

    return '' +
      '<section class="section container" id="cases">' +
        '<div class="section-head reveal">' +
          "<div>" +
            '<div class="label label--caps" style="margin-bottom:12px">' + esc(s.label) + "</div>" +
            '<h2 class="h2">' + esc(s.title) + "</h2>" +
          "</div>" +
          '<span class="section-head__count">' + D.cases.length + " проектов</span>" +
        "</div>" +
        (has(s.note)
          ? '<p class="lead reveal' + (s.noteDraft ? " draft" : "") + '" style="max-width:56ch;margin-bottom:var(--s8)">' + esc(s.note) + "</p>"
          : "") +
        '<div class="cases">' + list + "</div>" +
      "</section>";
  }

  /* ------------------------------------------------------------- СКИЛЛЫ */
  function skills() {
    var s = D.skills;

    var cols = (s.groups || []).map(function (g) {
      var items = (g.items || []).map(function (it) {
        return '<span class="skillgrid__item">' + esc(it) + "</span>";
      }).join("");
      return '<div class="skillgrid__col">' +
               '<div class="skillgrid__title">' + esc(g.title) + "</div>" +
               items +
             "</div>";
    }).join("");

    var tools = (s.tools || []).map(function (t) {
      return '<span class="chip">' + esc(t) + "</span>";
    }).join("");

    var expRows = function (rows) {
      return (rows || []).map(function (r) {
        return '<div class="exp__row">' +
                 '<span class="exp__role">' + esc(r.role) + "</span>" +
                 '<span class="exp__company">' + esc(r.company) + "</span>" +
                 '<span class="exp__years">' + esc(r.years) + "</span>" +
               "</div>";
      }).join("");
    };

    return '' +
      '<section class="section container" id="skills">' +
        '<div class="section-head reveal">' +
          "<div>" +
            '<div class="label label--caps" style="margin-bottom:12px">' + esc(s.label) + "</div>" +
            '<h2 class="h2">' + esc(s.title) + "</h2>" +
          "</div>" +
        "</div>" +
        (has(s.note)
          ? '<p class="lead reveal' + (s.noteDraft ? " draft" : "") + '" style="max-width:56ch;margin-bottom:var(--s9)">' + esc(s.note) + "</p>"
          : "") +

        '<div class="rowsec reveal">' +
          '<div class="rowsec__label">' + esc(s.groupsLabel) + "</div>" +
          '<div class="skillgrid">' + cols + "</div>" +
        "</div>" +

        '<div class="rowsec reveal">' +
          '<div class="rowsec__label">' + esc(s.toolsLabel) + "</div>" +
          '<div class="toolgrid">' + tools + "</div>" +
        "</div>" +

        '<div class="rowsec reveal">' +
          '<div class="rowsec__label">' + esc(s.experienceLabel) + "</div>" +
          '<div class="exp' + (s.experienceDraft ? " draft" : "") + '">' + expRows(s.experience) + "</div>" +
        "</div>" +

        '<div class="rowsec reveal">' +
          '<div class="rowsec__label">' + esc(s.educationLabel) + "</div>" +
          '<div class="exp' + (s.educationDraft ? " draft" : "") + '">' + expRows(s.education) + "</div>" +
        "</div>" +
      "</section>";
  }

  /* ----------------------------------------------------------- КОНТАКТЫ */
  function contacts() {
    var s = D.contactsSection;
    var items = UI.contactList(D.contacts);

    var rows = items.map(function (it) {
      var body = '' +
        '<span class="contactitem__ico">' + it.icon + "</span>" +
        "<span>" +
          '<span class="contactitem__label">' + esc(it.label) + "</span>" +
          '<span class="contactitem__value" style="display:block">' + esc(has(it.value) ? it.value : "скоро добавлю") + "</span>" +
        "</span>";

      if (!has(it.value)) {
        return '<button class="contactitem" disabled>' + body +
               '<span class="contactitem__hint">скоро</span></button>';
      }
      if (it.action === "copy") {
        return '<button class="contactitem" data-copy="' + esc(it.copy) + '">' + body +
               '<span class="contactitem__hint">' + I.copy + "</span></button>";
      }
      return '<a class="contactitem" href="' + esc(it.href) + '" target="_blank" rel="noopener">' + body +
             '<span class="contactitem__hint">' + I.arrowUpRight + "</span></a>";
    }).join("");

    var tg = D.contacts.telegram;
    var cta = has(tg)
      ? '<a class="btn btn--accent" href="' + esc(tg) + '" target="_blank" rel="noopener">' + esc(s.ctaLabel) + " " + I.arrowUpRight + "</a>"
      : (has(D.contacts.email)
          ? '<a class="btn btn--accent" href="mailto:' + esc(D.contacts.email) + '">Написать на почту ' + I.arrowUpRight + "</a>"
          : '<button class="btn btn--accent" disabled>' + esc(s.ctaLabel) + "</button>");

    return '' +
      '<section class="section container" id="contacts">' +
        '<div class="contacts reveal">' +
          '<div class="label label--caps" style="margin-bottom:16px">' + esc(s.label) + "</div>" +
          '<h2 class="h2 contacts__title' + (s.titleDraft ? " draft" : "") + '">' + esc(s.title) + "</h2>" +
          '<p class="lead contacts__text' + (s.textDraft ? " draft" : "") + '">' + esc(s.text) + "</p>" +
          '<div class="contactlist">' + rows + "</div>" +
          '<div style="margin-top:var(--s7)">' + cta + "</div>" +
        "</div>" +
      "</section>";
  }

  /* --------------------------------------------------------------- RENDER */
  function render() {
    UI.applyMeta(D);
    document.getElementById("app").innerHTML =
      UI.topbar(D) +
      "<main>" + hero() + cases() + skills() + contacts() + "</main>" +
      UI.footer(D) +
      UI.dock(D);
    UI.initBehaviour();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
