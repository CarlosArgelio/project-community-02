const express = require("express");
const { Router } = express;

const router = Router();

// create user
router.post("/", (req, res) => {
  const { username, password } = req.body;
  res.statusCode(201).json({ username, password });
});

// get user
router.get("/", (req, res) => {
  res.statusCode(200).json({ response: "hello world" });
});

// update user
router.patch("/", (req, res) => {
  res.statusCode(201).json({ response: "hello world" });
});

// delete user
router.delete("/", (req, res) => {
  res.statusCode(201).json({ response: "hello world" });
});

module.exports = router;
