const express = require("express");
const router = express.Router();

router.get("/", (_, res) => res.render(`welcome`));

module.exports = router;
