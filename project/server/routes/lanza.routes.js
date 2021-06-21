module.exports = app => {
    const posts = require("../controllers/lanza.controller.js");
  
    var router = require("express").Router();

  
    // Create a new Tutorial
    router.post("/", posts.create);
  
    // Retrieve all posts
    router.get("/", posts.findAll);
  
    // Retrieve all available posts
    router.get("/available", posts.findAllavailable);
  // Retrieve a single Tutorial with id
  router.get("/:id", posts.findOne);

  // Update a Tutorial with id
  router.put("/:id", posts.update);

  // Delete a Tutorial with id
  router.delete("/:id", posts.delete);

  // Delete all posts
  router.delete("/", posts.deleteAll);
  
  app.use('/api/posts', router);

};  