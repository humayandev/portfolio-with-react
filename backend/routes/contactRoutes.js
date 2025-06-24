const express = require("express");
const router = express.Router();
const { createMessage } = require("../controllers/contactController");

router.post("/send", createMessage);

module.exports = router;
