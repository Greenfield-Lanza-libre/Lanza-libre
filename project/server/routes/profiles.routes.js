const { user } = require("../models/index.js");

module.exports = app => {
    const profile = require("../controllers/profiles.controller.js");
    var router = require("express").Router();


        // Retrieve all profile
        router.get("/user/:userId", profile.findOne);
        router.get("/me/:userId", profile.findOne);

        router.post("/post", profile.create);
        router.post("/experience", profile.addexperience)
        router.post("/education", profile.addeducation);
        router.delete("/delete/experience", profile.deleteexperience)
        router.delete("/delete/:id", profile.deleteprofile)
  
        app.use('/api/profile', router);

}