const db = require("../models");
const profiles = db.profiles;
const education = db.education
const experiences = db.experiences
const Op = db.Sequelize.Op;












exports.create = (req, res)=>{

    const oneuser = req.body;

    profiles.create(oneuser)
    .then(data=>{
        console.log("chkara7oms");
        console.log(data)
        res.send(data);
    })
    .catch(err=>{
        console.log(err)
        console.log(oneuser);
        res.send(err);
    })
}









// exports.findAll = (req,res) =>{
//     user.findAll({})
//     .then(data =>{
       
//         res.send(data)
//     })
//     .catch(err =>{
//         console.log(err)
//         res.status(500).send({
//             message:
//               err.message || "Some error occurred while retrieving users."
//           });
//     })
// };











// Find a single profile with an id
exports.findOne = (req, res) => {
    const userId = req.params.userId;
  
    profiles.findByPk(userId)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
  };









//   find users with specific profession

//   exports.findByProfession = (req, res) => {
//       const freelancerProfession = req.params.profession
      
//        user.findAll({where : {
//            profession : freelancerProfession
//        }})
//        .then(data => {
//            res.status(200).send(data);
//        })
//        .catch(err =>{
//            res.status(500).send({
//             message:
//             err.message || "Some error occurred while retrieving users."
//            })
//        })
//   }











//exprience

exports.addexperience = (req, res) => {
    const experience = req.body;

    experiences.create(experience)
    .then(data=>{
        console.log("chkara7oms");
        console.log(data)
        res.send(data);
    })
    .catch(err=>{
        console.log(err)
        console.log(experience);
        res.send(err);
    })
    
  
 
  };

//delete experience

exports.deleteexperience = (req, res) => {
    const id = req.params.id;
  
    experiences.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "experience was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete experience with id=${id}. Maybe experience was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete experience with id=" + id
        });
      });
  };






  //add education



  exports.addeducation = (req, res)=>{

    const data = req.body;

    education.create(data)
    .then(data=>{
        console.log("chkara7oms");
        console.log(data)
        res.send(data);
    })
    .catch(err=>{
        console.log(err)
        console.log(data);
        res.send(err);
    })
}










//delete education

exports.deleteexperience = (req, res) => {
    const id = req.params.id;
  
    education.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "education was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete education with id=${id}. Maybe education was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete education with id=" + id
        });
      });
  };


  //delete account and profile

  



exports.deleteprofile = (req, res) => {
    const id = req.params.id;
  
    profile.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "profile was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete profile with id=${id}. Maybe profile was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete profile with id=" + id
        });
      });



}
