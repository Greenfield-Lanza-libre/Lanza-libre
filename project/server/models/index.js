const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./post.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.comments = require("./comments.model.js")(sequelize, Sequelize);
db.likes = require("./likes.model.js")(sequelize, Sequelize);
db.skills = require("./skills.model.js")(sequelize, Sequelize);
db.profiles = require("./profile.model.js")(sequelize, Sequelize);
db.experiences = require("./experience.model.js")(sequelize, Sequelize);
db.education = require("./education.model.js")(sequelize, Sequelize);
  
module.exports = db;