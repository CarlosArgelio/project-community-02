const express = require("express");

// imports routers
const routerApi = require("./components");

const app = express();

// format express type
app.use(express.json());

// use routers

routerApi(app);
