module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,

      }
      ,
      password: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      date: {
        type: Sequelize.DATE,
      }
    });
  
    return user;
  };