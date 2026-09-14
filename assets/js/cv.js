/* ==========================================================================
   CV.JS — страница просмотра резюме (cv.html).
   Страницы PDF рисуются через pdf.js, рядом кнопка скачивания.
   ========================================================================== */

(function () {
  "use strict";

  var D = window.CONTENT;
  var esc = UI.esc, has = UI.has, I = UI.ICONS;

  function render() {
    var file = D.contacts.cv;
    UI.applyMeta(D, "CV — " + D.person.name);

    var main = has(file)
      ? '<section class="container cvpage">' +
          '<a class="backlink" href="index.html">' + I.arrowLeft + " На главную</a>" +
          '<div class="cvpage__head">' +
            "<div>" +
              '<h1 class="h2">Резюме</h1>' +
              '<p class="small cvpage__sub">' + esc(D.person.name) + " · " + esc(D.person.role) + "</p>" +
            "</div>" +
            '<a class="btn btn--accent" href="' + esc(file) + '" download>' + I.download + " Скачать PDF</a>" +
          "</div>" +
          '<div class="cvpage__pages" id="cvPages">' +
            '<p class="small cvpage__status" id="cvStatus">Загружаю резюме…</p>' +
          "</div>" +
        "</section>"
      : '<section class="section container"><h1 class="h2">Резюме скоро появится</h1></section>';

    document.getElementById("app").innerHTML =
      UI.menubar(D) + "<main>" + main + "</main>" + UI.footer(D) + UI.toastEl();
    UI.initBehaviour();

    if (has(file)) drawPdf(file);
  }

  function drawPdf(file) {
    var box = document.getElementById("cvPages");
    var status = document.getElementById("cvStatus");

    function fallback() {
      status.innerHTML = 'Не получилось показать резюме на странице. <a class="accent" href="' +
        esc(file) + '" target="_blank" rel="noopener">Открыть PDF</a>';
    }

    if (!window.pdfjsLib) { fallback(); return; }
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    pdfjsLib.getDocument(file).promise.then(function (pdf) {
      status.remove();
      var chain = Promise.resolve();
      for (var n = 1; n <= pdf.numPages; n++) {
        (function (num) {
          chain = chain.then(function () {
            return pdf.getPage(num).then(function (page) {
              var width = box.clientWidth;
              var base = page.getViewport({ scale: 1 });
              var ratio = window.devicePixelRatio || 1;
              var vp = page.getViewport({ scale: (width / base.width) * ratio });

              var canvas = document.createElement("canvas");
              canvas.className = "cvpage__page";
              canvas.width = vp.width;
              canvas.height = vp.height;
              canvas.setAttribute("aria-label", "Страница резюме " + num);
              box.appendChild(canvas);

              return page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
            });
          });
        })(n);
      }
      return chain;
    }).catch(fallback);
  }

  document.addEventListener("DOMContentLoaded", render);
})();
