const express = require("express");
const { Router } = express;

const router = Router();

// create real state
router.post("/", (req, res) => {
  res.statusCode(201).json({ response: "hello world" });
});

// update real state
router.patch("/", (req, res) => {
  res.statusCode(200).json({ response: "hello world" });
});

// delete real state
router.delete("/", (req, res) => {
  res.statusCode(204).json({ response: "hello world" });
});

router.get("/", (req, res) => {
  res.statusCode(200).json({ response: "hello world" });
});

module.exports = router;
