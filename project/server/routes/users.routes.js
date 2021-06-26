const { user } = require("../models/index.js");

module.exports = app => {
    const users = require("../controllers/users.controller.js");
    var router = require("express").Router();


        // Retrieve all users
        router.get("/get", users.findAll);
        router.post("/post", users.create);
        router.get("/:profession",users.findByProfession)
        router.get("/:id",users.findOne)
  
        app.use('/api/users', router);

}