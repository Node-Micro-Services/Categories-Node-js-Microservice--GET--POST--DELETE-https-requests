const Sequelize = require("sequelize").Sequelize;

const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  "category",
  "root",
  "shivamsharma1",
  {
    dialect: "mysql",
    host: "localhost",
  }
);
module.exports = sequelize;