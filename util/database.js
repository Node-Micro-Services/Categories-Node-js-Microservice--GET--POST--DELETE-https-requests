const Sequelize = require("sequelize").Sequelize;

const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.UNAME,
  process.env.PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST,
  }
);
module.exports = sequelize;