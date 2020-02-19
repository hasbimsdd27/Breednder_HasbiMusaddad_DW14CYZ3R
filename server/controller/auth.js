const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      let verifikasi = bcrypt.compareSync(password, user.password);
      if (verifikasi) {
        const token = jwt.sign(
          { user_id: user.id, user_name: user.breeder },
          process.env.SECRET_KEY
        );
        res.status(200).send({ email: user.email, token: token });
      } else {
        res.status(401).send({ message: "invalid login" });
      }
    } else {
      res.status(401).send({ message: "invalid login" });
    }
  } catch (err) {
    console.log(err);
  }
};
