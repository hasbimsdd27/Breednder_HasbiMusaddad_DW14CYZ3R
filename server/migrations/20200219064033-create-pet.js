"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.INTEGER,
        references: {
          model: "species",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      age: {
        type: Sequelize.INTEGER,
        references: {
          model: "ages",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      breeder: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      about_pet: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pets");
  }
};
