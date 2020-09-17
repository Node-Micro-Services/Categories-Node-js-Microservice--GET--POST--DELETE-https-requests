const Sequelize = require("sequelize").Sequelize;

const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DBNAME || "trip",
  process.env.USERNAME || "root",
  process.env.PASSWORD || "shivamsharma1",
  {
    dialect: "mysql",
    host: process.env.HOST || "localhost",
  }
);
module.exports = sequelize;