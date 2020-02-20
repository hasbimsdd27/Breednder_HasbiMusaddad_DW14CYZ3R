const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.detailUser = async (req, res) => {
  try {
    const { id } = req.params;
    let userData = await User.findOne(
      { attributes: { exclude: ["email", "password"] } },
      { where: { id } }
    );
    if (userData.id == id) {
      res.status(200).send(userData);
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, phone } = req.body;
    let userData = await User.findOne(
      { attributes: { exclude: ["email", "password"] } },
      { where: { id } }
    );

    if (userData.id == id) {
      const updateUser = await User.update(
        {
          breeder: name,
          address,
          phone,
          updatedAt: new Date()
        },
        { where: { id } }
      );
      let userData = await User.findOne(
        { attributes: { exclude: ["email", "password"] } },
        { where: { breeder: name, address, phone } }
      );
      res.status(200).send(userData);
    }
    res.status(404).send({ message: "data not found" });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await User.destroy({ where: { id } });
    if (!userDelete) {
      res.status(404).send({ message: "Data not found" });
    } else {
      res.status(200).send({ id });
    }
  } catch (err) {
    console.log(err);
  }
};
