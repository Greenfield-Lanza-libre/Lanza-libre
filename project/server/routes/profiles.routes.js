const { user } = require("../models/index.js");

module.exports = app => {
    const profile = require("../controllers/profiles.controller.js");
    var router = require("express").Router();


        // Retrieve all profile
        router.get("/user/:userId", profile.findOne);
        router.post("/post", profile.create);
        router.get("/:profession",profile.findByProfession)
        router.get("/:id",profile.findOne)
  
        app.use('/api/profile', router);

}