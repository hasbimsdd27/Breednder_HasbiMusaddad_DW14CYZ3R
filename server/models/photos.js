'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
    pet: DataTypes.INTEGER,
    path: DataTypes.STRING
  }, {});
  photos.associate = function(models) {
    // associations can be defined here
  };
  return photos;
};