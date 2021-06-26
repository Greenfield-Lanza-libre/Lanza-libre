//this model is for education that will be displayed in profile later 
module.exports = (sequelize, Sequelize) => {
    const education = sequelize.define("education", {
     school: {
         type: Sequelize.STRING,
         allowNull: false,
     },
     degree: {
         type: Sequelize.STRING,
         allowNull: false,
     },
     fieldofstudy : {
         type: Sequelize.STRING,
         allowNull: false,
     },
     from :{
         type: Sequelize.DATE,
         allowNull: false,
     },
     to :{
         type: Sequelize.DATE,
     },
     current: {
type : Sequelize.BOOLEAN,
         defaultValue : false,
     },
     description : {
         type : Sequelize.TEXT,
     },


      
    });
  
    return education;
  };