const realState = require("./realState");
const users = require("./users");
const express = require("express");
const { Router } = express;

function routerApi(app) {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/realState", realState);
  router.use("/users", users);
}

module.exports = routerApi;
