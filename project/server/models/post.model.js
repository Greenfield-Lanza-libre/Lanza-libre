module.exports = (sequelize, Sequelize) => {
    const post = sequelize.define("post", {
      user: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      available:{
        type: Sequelize.BOOLEAN
      }

      
    });
  
    return post;
  };