const dbConfig = require("../util/config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
},{
  timestamps: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require("./student.model")(sequelize, Sequelize);

module.exports = db;
