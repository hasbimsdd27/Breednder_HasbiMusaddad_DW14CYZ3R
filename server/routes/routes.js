const express = require("express");
const router = express.Router();
const { login, register } = require("../controller/auth");
const { createSpecies, loadAllSpecies } = require("../controller/petSpecies");

router.post("/login", login);

router.post("/register", register);

router.post("/species", createSpecies);

router.get("/species", loadAllSpecies);

module.exports = router;
