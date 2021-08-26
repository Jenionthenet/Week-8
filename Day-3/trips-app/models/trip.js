'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Trip.hasMany(models.Comment, { as: 'comments', foreignKey: 'tripId'})
    }
  };
  Trip.init({
    title: DataTypes.STRING,
    departureDate: DataTypes.STRING,
    returnDate: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    continent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};