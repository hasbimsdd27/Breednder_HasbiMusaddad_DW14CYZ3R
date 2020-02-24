const jwt = require("jsonwebtoken");
const models = require("../models");
const Pet = models.pet;
const Photo = models.photos;
const User = models.user;
const Species = models.species;
const Age = models.age;
const Payment = models.payment;

exports.addPet = async (req, res) => {
  const { name, gender, spesies, age, about_pet, photo } = req.body;
  let datetime = new Date();
  let user = req.user;
  try {
    const premium = await Payment.findOne({
      where: { user }
    });
    if (!premium || premium.status == "free") {
      res.status(403).send({
        message: "you are not premium user"
      });
    } else {
      const petInput = await Pet.create({
        name,
        gender,
        species: spesies.id,
        age: age.id,
        breeder: user,
        about_pet,
        createdAt: datetime,
        updatedAt: datetime
      });
      if (!petInput) {
        throw new Error();
      }

      let petData = await Pet.findOne({
        where: {
          name,
          gender,
          species: spesies.id,
          age: age.id
        },
        include: [
          {
            model: Species,
            as: "petSpecies",
            attributes: { exclude: ["createdAt", "updatedAt"] }
          },
          {
            model: Age,
            as: "petAge",
            attributes: { exclude: ["createdAt", "updatedAt"] }
          },
          {
            model: User,
            as: "owner",
            attributes: {
              exclude: ["email", "password", "createdAt", "updatedAt"]
            }
          }
        ],
        attributes: { exclude: ["species", "age", "breeder"] }
      });

      const photoInput = await Photo.create({
        pet: petData.id,
        path: photo
      });

      if (!photoInput) {
        throw new Error();
      }
      let data = petData;
      res.status(201).send({
        message: "successfuly add pet",
        data
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.loadAllPet = async (req, res) => {
  try {
    const allPet = await Pet.findAll({
      include: [
        {
          model: Species,
          as: "petSpecies",
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          model: Age,
          as: "petAge",
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          model: User,
          as: "owner",
          attributes: {
            exclude: ["email", "password", "createdAt", "updatedAt"]
          }
        }
      ],
      attributes: { exclude: ["species", "age", "breeder"] }
    });

    res.status(200).send(allPet);
  } catch (err) {
    console.log(err);
  }
};

exports.updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, spesies, age, about_pet, photo } = req.body;
    let dataPet = await Pet.findOne({
      where: { id }
    });
    if (!dataPet) {
      res.status(404).send({ message: "Data not found" });
    } else {
      if (dataPet.breeder !== req.user) {
        res
          .status(401)
          .send({ message: "You are not allowed to access this data" });
      } else {
        const updatePet = await Pet.update(
          {
            name,
            gender,
            species: spesies.id,
            age: age.id,
            about_pet,
            updatedAt: new Date()
          },
          { where: { id } }
        );

        let petData2 = await Pet.findOne({
          where: {
            name,
            gender,
            species: spesies.id,
            age: age.id,
            breeder: req.user
          },
          include: [
            {
              model: Species,
              as: "petSpecies",
              attributes: { exclude: ["createdAt", "updatedAt"] }
            },
            {
              model: Age,
              as: "petAge",
              attributes: { exclude: ["createdAt", "updatedAt"] }
            },
            {
              model: User,
              as: "owner",
              attributes: {
                exclude: ["email", "password", "createdAt", "updatedAt"]
              }
            }
          ],
          attributes: { exclude: ["species", "age", "breeder"] }
        });
        let data = petData2;
        res.status(200).send({ message: "data successfully updated", data });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    let dataPet = await Pet.findOne({
      where: { id }
    });

    if (!dataPet) {
      res.status(404).send({ message: "Data not found" });
    } else {
      if (dataPet.breeder !== req.user) {
        res
          .status(401)
          .send({ message: "You are not allowed to access this data" });
      } else {
        const petDelete = await Pet.destroy({ where: { id } });
        res.status(200).send({ id });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.detailPet = async (req, res) => {
  try {
    const { id } = req.params;
    let petData = await Pet.findOne({
      where: { id },
      attributes: {
        exclude: ["species", "age", "breeder"]
      },
      include: [
        {
          model: Species,
          as: "petSpecies",
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          model: Age,
          as: "petAge",
          attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        {
          model: User,
          as: "owner",
          attributes: {
            exclude: ["email", "password", "createdAt", "updatedAt"]
          }
        }
      ]
    });
    if (petData.id == id) {
      res.status(200).send(petData);
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
