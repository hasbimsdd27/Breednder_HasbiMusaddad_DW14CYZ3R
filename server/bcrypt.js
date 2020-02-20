function Passgenerator() {
  const bcrypt = require("bcrypt");
  let pass = "";
  let hash = bcrypt.hashSync("adminspiderman", 10);
  return hash;
}

console.log(Passgenerator());
