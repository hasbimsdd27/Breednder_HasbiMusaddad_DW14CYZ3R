"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          breeder: "spiderman-wannabe",
          email: "spiderman@gmail.com",
          password:
            "$2b$10$r5reDOPBuPdai9n9F80GL.I9vL1I/Jj7Rbx7ekeM9ekkncZ.R15t.",
          phone: "08111222333",
          address: "Jl. in Aja Dulu",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  }
};
