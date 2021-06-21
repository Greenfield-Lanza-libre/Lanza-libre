module.exports = {
    HOST: "localhost",
    USER: "Lanza",
    PASSWORD: "Lanza_123",
    DB: "lanza",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };