/* ==========================================================================
   MAIN.JS — сборка главной страницы из content.js
   Порядок блоков: Hero → Кейсы → Скиллы → Контакты
   ========================================================================== */

(function () {
  "use strict";

  var D = window.CONTENT;
  var esc = UI.esc, has = UI.has, I = UI.ICONS;

  function head(title, count) {
    return '<div class="section-head reveal">' +
             '<h2 class="h2">' + esc(title) + "</h2>" +
             (count ? '<span class="section-head__count">' + esc(count) + "</span>" : "") +
           "</div>";
  }

  /* --------------------------------------------------------------- HERO */
  function hero() {
    var p = D.person;

    var chips = (p.highlights || []).map(function (h) {
      return '<span class="chip">' + esc(h) + "</span>";
    }).join("");

    return '' +
      '<section class="hero container" id="top">' +
        '<div class="hero__grid">' +
          '<div class="hero__photo reveal">' +
            UI.media(p.photo, p.name, p.photoHint, "Фото") +
          "</div>" +
          '<div class="reveal">' +
            (has(p.metaLine) ? '<div class="hero__meta">' + esc(p.metaLine) + "</div>" : "") +
            '<h1 class="display hero__title' + (p.headlineDraft ? " draft" : "") + '">' + esc(p.headline) + "</h1>" +
            (has(p.about)
              ? '<p class="lead hero__about' + (p.aboutDraft ? " draft" : "") + '">' + esc(p.about) + "</p>"
              : "") +
            (chips ? '<div class="chips">' + chips + "</div>" : "") +
          "</div>" +
        "</div>" +
      "</section>";
  }

  /* -------------------------------------------------------------- КЕЙСЫ */
  function cases() {
    var list = D.cases.map(function (c, i) {
      var tags = (c.tags || []).map(function (t) {
        return '<span class="chip chip--ghost">' + esc(t) + "</span>";
      }).join("");

      return '' +
        '<a class="case reveal" href="case.html?id=' + esc(c.id) + '">' +
          '<div class="case__media">' +
            UI.media(c.cover, c.title, c.coverHint, "Обложка " + String(i + 1)) +
          "</div>" +
          '<div class="case__body">' +
            '<div class="case__top">' +
              '<span class="case__meta">' + esc(c.meta) + "</span>" +
              '<span class="case__year">' + esc(c.year) + "</span>" +
            "</div>" +
            '<h3 class="case__title' + (c.titleDraft ? " draft" : "") + '">' + esc(c.title) + "</h3>" +
            (has(c.desc)
              ? '<p class="case__desc' + (c.descDraft ? " draft" : "") + '">' + esc(c.desc) + "</p>"
              : "") +
            (tags ? '<div class="case__tags">' + tags + "</div>" : "") +
            '<span class="case__cta">Смотреть ' + I.arrowUpRight + "</span>" +
          "</div>" +
        "</a>";
    }).join("");

    return '' +
      '<section class="section container" id="cases">' +
        head(D.casesSection.title, D.cases.length) +
        '<div class="cases">' + list + "</div>" +
      "</section>";
  }

  /* ------------------------------------------------------------- СКИЛЛЫ */
  function skills() {
    var s = D.skills;

    var cols = (s.groups || []).map(function (g, i) {
      var items = (g.items || []).map(function (it) {
        return '<span class="skillgrid__item">' + esc(it) + "</span>";
      }).join("");
      return '<div class="skillgrid__col">' +
               '<div class="skillgrid__head">' +
                 '<span class="skillgrid__num">' + String(i + 1).padStart(2, "0") + "</span>" +
                 '<span class="skillgrid__title">' + esc(g.title) + "</span>" +
               "</div>" +
               items +
             "</div>";
    }).join("");

    var tools = (s.tools || []).map(function (t) {
      return '<span class="chip">' + esc(t) + "</span>";
    }).join("");

    var rows = function (arr) {
      return (arr || []).map(function (r) {
        return '<div class="exp__row">' +
                 '<span class="exp__role">' + esc(r.role) + "</span>" +
                 '<span class="exp__company">' + esc(r.company) + "</span>" +
                 '<span class="exp__years">' + esc(r.years) + "</span>" +
               "</div>";
      }).join("");
    };

    var sec = function (label, inner, draft) {
      if (!inner) return "";
      return '<div class="rowsec reveal">' +
               '<div class="rowsec__label">' + esc(label) + "</div>" +
               '<div' + (draft ? ' class="draft"' : "") + ">" + inner + "</div>" +
             "</div>";
    };

    return '' +
      '<section class="section container" id="skills">' +
        head(s.title) +
        sec(s.groupsLabel, cols ? '<div class="skillgrid">' + cols + "</div>" : "") +
        sec(s.toolsLabel, tools ? '<div class="toolgrid">' + tools + "</div>" : "") +
        sec(s.experienceLabel, rows(s.experience) ? '<div class="exp">' + rows(s.experience) + "</div>" : "", s.experienceDraft) +
        sec(s.educationLabel, rows(s.education) ? '<div class="exp">' + rows(s.education) + "</div>" : "", s.educationDraft) +
      "</section>";
  }

  /* ----------------------------------------------------------- КОНТАКТЫ */
  function contacts() {
    var rows = UI.contactList(D.contacts).map(function (it) {
      var body = '' +
        '<span class="contactitem__ico">' + it.icon + "</span>" +
        "<span>" +
          '<span class="contactitem__label">' + esc(it.label) + "</span>" +
          '<span class="contactitem__value">' + esc(has(it.value) ? it.value : "скоро") + "</span>" +
        "</span>";

      if (!has(it.value)) {
        return '<button class="contactitem" disabled>' + body + "</button>";
      }
      if (it.action === "copy") {
        return '<button class="contactitem" data-copy="' + esc(it.copy) + '">' + body +
               '<span class="contactitem__hint">' + I.copy + "</span></button>";
      }
      return '<a class="contactitem" href="' + esc(it.href) + '" target="_blank" rel="noopener">' + body +
             '<span class="contactitem__hint">' + I.arrowUpRight + "</span></a>";
    }).join("");

    return '' +
      '<section class="section container" id="contacts">' +
        head(D.contactsSection.title) +
        '<div class="contactlist reveal">' + rows + "</div>" +
      "</section>";
  }

  /* -------------------------------------------------------------- RENDER */
  function render() {
    UI.applyMeta(D);
    document.getElementById("app").innerHTML =
      UI.menubar(D) +
      "<main>" + hero() + cases() + skills() + contacts() + "</main>" +
      UI.footer(D) +
      UI.toastEl();
    UI.initBehaviour();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
