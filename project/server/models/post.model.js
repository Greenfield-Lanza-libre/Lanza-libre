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
      },
  
date : {
  type: Sequelize.DATE
},
avatar: {
  type: Sequelize.STRING
},
likes : { 
  type : Sequelize.INTEGER
}
 

      
    });
  
    return post;
  };