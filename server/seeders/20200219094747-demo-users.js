"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          breeder: "spiderman-wannabe",
          email: "",
          password:
            "$2b$10$xBCMLNpXUymr6INiw4ktteyb6BjheltCDs7mcRR7kdi13B.KbJdhy",
          phone: "08112233445566",
          address: "Jl. in Dulu aja",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
