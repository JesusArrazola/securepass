const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("V1 secure password root");
});

module.exports = router;
