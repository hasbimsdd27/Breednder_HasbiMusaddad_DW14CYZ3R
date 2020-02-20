const jwt = require("jsonwebtoken");
const models = require("../models");
const Pet = models.pet;
const Photo = models.photos;
const User = models.user;
const Species = models.species;
const Age = models.age;

exports.addPet = async (req, res) => {
  const { name, gender, spesies, age, user, about_pet, photo } = req.body;
  let datetime = new Date();
  try {
    const petInput = await Pet.create({
      name,
      gender,
      species: spesies.id,
      age: age.id,
      breeder: user.id,
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
        age: age.id,
        breeder: user.id
      }
    });

    const photoInput = await Photo.create({
      pet: petData.id,
      path: photo
    });

    if (!photoInput) {
      throw new Error();
    }

    res.status(200).send({
      name,
      gender,
      spesies,
      age,
      user,
      about_pet,
      photo,
      createdAt: datetime,
      updatedAt: datetime
    });
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
    const { name, gender, spesies, age, user, about_pet, photo } = req.body;
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
            breeder: user.id,
            about_pet,
            updatedAt: new Date()
          },
          { where: { id } }
        );

        let petData2 = await Pet.findOne(
          {
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
          },
          {
            where: {
              name,
              gender,
              species: spesies.id,
              age: age.id,
              breeder: user.id
            }
          }
        );

        res.status(200).send(petData2);
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
    let petData = await Pet.findOne(
      {
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
      },
      { where: { id } }
    );
    if (petData.id == id) {
      res.status(200).send(petData);
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
