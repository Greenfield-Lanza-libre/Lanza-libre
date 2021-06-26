//this model is for skills that will be displayed in profile later 
module.exports = (sequelize, Sequelize) => {
    const skills = sequelize.define("skills", {
      user: {
        type: Sequelize.STRING
      },
      userId : {
          type: Sequelize.INTEGER
      },
      profileId : {
          type: Sequelize.INTEGER
      },
      skill : {
          type: Sequelize.STRING
      }
      
    });
  
    return skills;
  };