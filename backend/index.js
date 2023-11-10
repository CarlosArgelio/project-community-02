const express = require("express");

// imports routers
const users = require("./users");
const realState = require("./realState");

const app = express();

// format express type
app.use(express.json());

app.use("/users", users);
app.use("/real-state", realState);
