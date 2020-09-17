const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../util/database");

const Category = sequelize.define(
  "category",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isMajor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = Category;
