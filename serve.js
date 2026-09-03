/* Мини-сервер для локального просмотра. Зависимостей нет.
   Запуск:  node serve.js      → http://localhost:5173
   На деплой не влияет — Vercel этот файл просто игнорирует. */

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname);
const PORT = Number(process.argv[2] || 5173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p === "/") p = "/index.html";

    const file = path.join(ROOT, p);
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end("forbidden");
      return;
    }

    fs.readFile(file, (err, buf) => {
      if (err) {
        res
          .writeHead(404, { "content-type": "text/plain; charset=utf-8" })
          .end("404 — не найдено: " + p);
        return;
      }
      res
        .writeHead(200, {
          "content-type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
          "cache-control": "no-store",
        })
        .end(buf);
    });
  })
  .listen(PORT, () => {
    console.log("Портфолио открыто: http://localhost:" + PORT);
  });
