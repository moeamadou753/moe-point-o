const express = require("express");
const next = require("next");
const favicon = require("serve-favicon");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const serveStatic = require("serve-static");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      res.setHeader('Cache-Control', 'no-store');
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.use(favicon(path.join(__dirname, "public", "favicon.ico")));
    server.use(serveStatic(path.resolve("./static")));
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
