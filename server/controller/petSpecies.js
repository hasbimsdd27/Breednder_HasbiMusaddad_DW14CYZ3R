const jwt = require("jsonwebtoken");
const models = require("../models");
const Species = models.species;

exports.createSpecies = async (req, res) => {
  const { name } = req.body;
  try {
    const speciesInput = await Species.create({ name });
    res.status(200).send({ id: speciesInput.id, name: speciesInput.name });
  } catch (err) {
    console.log(err);
  }
};

exports.loadAllSpecies = async (req, res) => {
  try {
    const allSpecies = await Species.findAll();
    res.status(200).send(allSpecies);
  } catch (err) {
    console.log(err);
  }
};
