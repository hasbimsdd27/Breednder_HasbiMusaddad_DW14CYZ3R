"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          email: "spiderman@admin.com",
          password:
            "$2b$10$5riV6bpGDnigjLd6xMeD.Op5RMqViivP8v9rr/7MB36ZT2fm70mnm",
          name: "Admin-Spiderman",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("admins", null, {});
  }
};
