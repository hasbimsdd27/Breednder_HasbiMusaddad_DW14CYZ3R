"use strict";
module.exports = (sequelize, DataTypes) => {
  const pet = sequelize.define(
    "pet",
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      species: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      breeder: DataTypes.INTEGER,
      about_pet: DataTypes.STRING
    },
    {}
  );
  pet.associate = function(models) {
    pet.belongsTo(models.age, {
      as: "petAge",
      foreignKey: "id"
    });
    pet.belongsTo(models.species, {
      as: "petSpecies",
      foreignKey: "id"
    });
  };
  return pet;
};
