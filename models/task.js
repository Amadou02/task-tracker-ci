"use strict";
const { Model, DataTypes, Sequelize } = require("sequelize");
/**
 *
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      isCompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
    }
  );
  return Task;
};
