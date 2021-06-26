module.exports = (sequelize, Sequelize) => {
    const likes = sequelize.define("likes", {
      user: {
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.INTEGER
      }
 

      
    });
  
    return likes;
  };