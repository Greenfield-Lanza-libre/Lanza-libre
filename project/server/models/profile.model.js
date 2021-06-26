module.exports = (sequelize, Sequelize) => {
    const profiles = sequelize.define("profiles", {
      user: {
        type: Sequelize.STRING
      },
      userId: {
          type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.INTEGER
      },
      website: {
          type: Sequelize.STRING
      },
      location: {
          type: Sequelize.STRING
      },
      status: {
          type: Sequelize.STRING,
          allowNull: false,

      },
      bio: {
          type: Sequelize.TEXT
      },
      githubusername: {
          type: Sequelize.STRING
      },
     
          youtube : {
              type: Sequelize.STRING,
          },
          twitter : {
              type: Sequelize.STRING,
          },
          facebook : {
              type: Sequelize.STRING,
          },
          linkedin: {
              type: Sequelize.STRING,
          },
          instagram: {
              type: Sequelize.STRING,
          },
    
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }

 

      
    });
  
    return profiles;
  };