const express = require("express");
const router = express.Router();
const { login } = require("../controller/auth");

router.get("/", (req, res) => res.send("Hello World!"));

router.post("/login", login);

router.get("/login", (req, res) => res.send("Hello World!"));
module.exports = router;
