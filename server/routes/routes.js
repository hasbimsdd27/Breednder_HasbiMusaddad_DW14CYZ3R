const express = require("express");
const router = express.Router();
const { login, register } = require("../controller/auth");
const { createSpecies, loadAllSpecies } = require("../controller/petSpecies");
const { auth } = require("../middleware/auth");
const {
  addPet,
  loadAllPet,
  updatePet,
  deletePet,
  detailPet
} = require("../controller/pet");
const { detailUser, editUser, deleteUser } = require("../controller/user");
const {
  checkMatch,
  createMatch,
  updateMatch,
  getMatched
} = require("../controller/match");

router.post("/login", login);

router.post("/register", register);

router.post("/species", createSpecies);
router.get("/species", loadAllSpecies);

router.post("/pet", auth, addPet);
router.get("/pet", loadAllPet);
router.patch("/pet/:id", auth, updatePet);
router.get("/pet/:id", detailPet);
router.delete("/pet/:id", auth, deletePet);

router.get("/user/:id", detailUser);
router.patch("/user/:id", auth, editUser);
router.delete("/user/:id", auth, deleteUser);

router.get("/match", auth, checkMatch);
router.post("/match", auth, createMatch);
router.patch("/match", auth, updateMatch);
router.get("/matches", auth, getMatched);
module.exports = router;
