const express = require("express");
const router = express.Router();

router.get("/hey", (req, res) => {
  res.send("hello");
});

module.exports = router;
