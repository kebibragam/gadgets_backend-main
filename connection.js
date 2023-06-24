const { Sequelize } = require("sequelize");
const { config } = require("./config/config");
const { initModels } = require("./models/init-models");

const sequelize = new Sequelize({
  host: config.DATABASE.HOST,
  database: config.DATABASE.NAME,
  dialect: "mysql",
  username: config.DATABASE.USERNAME,
  password: config.DATABASE.PASSWORD,
  // eslint-disable-next-line eqeqeq
  port: config.DATABASE.PORT == 3006 ? "" : config.DATABASE.PORT,
});
const models = initModels(sequelize);

module.exports.models = models;
