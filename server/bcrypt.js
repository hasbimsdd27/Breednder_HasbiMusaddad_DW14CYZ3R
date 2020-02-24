function Passgenerator() {
  const bcrypt = require("bcrypt");
  let pass = "";
  let hash = bcrypt.hashSync("ironmen@ironmen.com", 10);
  return hash;
}

console.log(Passgenerator());
