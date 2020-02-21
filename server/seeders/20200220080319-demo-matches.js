"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "matches",
      [
        {
          pet: 1,
          pet_liked: 3,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          pet: 2,
          pet_liked: 4,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    Example: return queryInterface.bulkDelete("matches", null, {});
  }
};
