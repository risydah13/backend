/*
  IMPORT MODULE SEQUELIZE
*/
const Sequelize = require("sequelize");

// Initialize database with Sequelize
const db = new Sequelize("nutriscan-db", "root", "cimenglucu13", {
  host: "34.128.117.195",
  dialect: "mysql",
});

module.exports = db;