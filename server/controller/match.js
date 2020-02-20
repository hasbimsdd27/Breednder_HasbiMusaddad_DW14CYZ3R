const models = require("../models");
const Pet = models.pet;
const Photo = models.photos;
const User = models.user;
const Species = models.species;
const Age = models.age;
const Match = models.match;

exports.checkMatch = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.query;
    const dataMatch = await Match.findOne({
      where: { pet: pet_id, pet_liked: pet_id_liked },
      include: [
        {
          model: Pet,
          as: "originPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        {
          model: Pet,
          as: "likedPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        }
      ],
      attributes: { exclude: ["pet", "pet_liked"] }
    });
    res.send(dataMatch);
  } catch (err) {
    console.log(err);
  }
};

exports.createMatch = async (req, res) => {
  const { pet_id, pet_id_liked, status } = req.body;
  try {
    const matchInput = await Match.create({
      pet: pet_id,
      pet_liked: pet_id_liked,
      status
    });
    const dataMatch = await Match.findOne({
      where: { pet: pet_id, pet_liked: pet_id_liked, status },
      include: [
        {
          model: Pet,
          as: "originPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        {
          model: Pet,
          as: "likedPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        }
      ],
      attributes: { exclude: ["pet", "pet_liked"] }
    });
    res.status(200).send(dataMatch);
  } catch (err) {
    console.log(err);
  }
};

exports.updateMatch = async (req, res) => {
  try {
    const { pet_id, pet_id_liked, status } = req.body;
    let dataStatus = 0;
    if (status == "false") {
      dataStatus = 0;
    } else {
      dataStatus = 1;
    }
    const updateMatch = await Match.update(
      {
        status,
        updatedAt: new Date()
      },
      { where: { pet: pet_id, pet_liked: pet_id_liked } }
    );
    const dataMatch = await Match.findOne({
      where: { pet: pet_id, pet_liked: pet_id_liked, status: dataStatus },
      include: [
        {
          model: Pet,
          as: "originPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        {
          model: Pet,
          as: "likedPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        }
      ],
      attributes: { exclude: ["pet", "pet_liked"] }
    });
    res.status(200).send(dataMatch);
  } catch (err) {
    console.log(err);
  }
};

exports.getMatched = async (req, res) => {
  try {
    const { pet_id, status } = req.query;
    let dataStatus = 0;
    if (status == "false") {
      dataStatus = 0;
    } else {
      dataStatus = 1;
    }
    const dataMatch = await Match.findAll({
      where: { pet: pet_id, status: dataStatus },
      include: [
        {
          model: Pet,
          as: "originPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        {
          model: Pet,
          as: "likedPet",
          attributes: {
            exclude: ["createdAt", "updatedAt", "species", "age", "breeder"]
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
        }
      ],
      attributes: { exclude: ["pet", "pet_liked"] }
    });
    res.status(200).send(dataMatch);
  } catch (err) {
    console.log(err);
  }
};
