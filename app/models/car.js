"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      type: DataTypes.ENUM("small", "medium", "large"),
      sewahari: DataTypes.INTEGER,
      imgurl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  Car.beforeCreate((car) => (car.id = uuidv4()));
  return Car;
};
