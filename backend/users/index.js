const express = require("express");
const { Router } = express;

const router = Router();

// create user
router.post("/users", (req, res) => {
  const { username, password } = req.body;
  res.statusCode(201).json({ username, password });
});

// get user
router.get("/users", (req, res) => {
  res.statusCode(200).json({ response: "hello world" });
});

// update user
router.patch("/users", (req, res) => {
  res.statusCode(201).json({ response: "hello world" });
});

// delete user
router.delete("/users", (req, res) => {
  res.statusCode(201).json({ response: "hello world" });
});

module.exports = router;
