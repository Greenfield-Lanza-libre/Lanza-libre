//this model is for displaying the previous experiences of a user in his profile
module.exports = (sequelize, Sequelize) => {
    const experiences = sequelize.define("experiences", {
profileId :{
   type: Sequelize.INTEGER
 },
   title: {
type: Sequelize.STRING,
allowNull: false,

   },
   company: {
type: Sequelize.STRING,
       allowNull: false,

   },
   location: {
type: Sequelize.STRING,
   },
   from : {
type: Sequelize.DATE,
   },
   to : {
type: Sequelize.DATE
   },
   current : {
type: Sequelize.BOOLEAN,
       defaultValue : false,
   },
   description : {
type: Sequelize.TEXT,
   }

      
    });
  
    return experiences;
  };