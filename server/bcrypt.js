function Passgenerator() {
  const bcrypt = require("bcrypt");
  let pass = "";
  let hash = bcrypt.hashSync("lovespiderman", 10);
  return hash;
}

console.log(Passgenerator());
