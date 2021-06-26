module.exports = (sequelize, Sequelize) => {
    const comments = sequelize.define("comments", {
      user: {
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.INTEGER
      },
     
      text: {
        type: Sequelize.STRING
      },
  
date : {
  type: Sequelize.DATE
}
 

      
    });
  
    return comments;
  };