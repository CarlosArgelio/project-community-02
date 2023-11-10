const express = require("express");
const { Router } = express;

const router = Router();

// create real state
router.post("/real-state", (req, res) => {
  res.statusCode(201).json({ response: "hello world" });
});

// update real state
router.patch("/real-state", (req, res) => {
  res.statusCode(200).json({ response: "hello world" });
});

// delete real state
router.delete("/real-state", (req, res) => {
  res.statusCode(204).json({ response: "hello world" });
});

router.get("/real-state", (req, res) => {
  res.statusCode(200).json({ response: "hello world" });
});

module.exports = router;
