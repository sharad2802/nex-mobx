const express = require("express");
const next = require("next");
var compression = require('compression')

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();



const config = require("./config")

app.prepare().then(async () => {
  const server = express();
  server.use(compression())

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(config.port)
});
