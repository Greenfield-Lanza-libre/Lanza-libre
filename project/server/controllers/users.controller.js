const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;




exports.create = (req, res)=>{

    const oneuser = {
        username: req.body.username,
        email: req.body.email,
        password:req.body.password,
        date: req.body.date
    };

    user.create(oneuser)
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

exports.findAll = (req,res) =>{
    user.findAll({})
    .then(data =>{
       
        res.send(data)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
    })
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    user.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
  };

  //find users with specific profession

  exports.findByProfession = (req, res) => {
      const freelancerProfession = req.params.profession
      
       user.findAll({where : {
           profession : freelancerProfession
       }})
       .then(data => {
           res.status(200).send(data);
       })
       .catch(err =>{
           res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users."
           })
       })
  }