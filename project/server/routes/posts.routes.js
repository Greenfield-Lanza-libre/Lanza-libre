module.exports = app => {
    const posts = require("../controllers/posts.controller.js");
  
    var router = require("express").Router();

  //posts
    router.post("/", posts.create);
  
    // Retrieve all posts
    router.get("/", posts.findAll);
  
    // Retrieve all available posts
    router.get("/available", posts.findAllavailable);
  // Retrieve a single Tutorial with id
  router.get("/:id", posts.findOne);

  // Update a Tutorial with id
  router.put("like/:id/:username", posts.like);
  router.put("unlike/:id/:username", posts.unlike);

  // Delete a Tutorial with id
  router.delete("/:id", posts.delete);

  // Delete all posts
  router.delete("/", posts.deleteAll);


  // adding comments

  router.post("/comments/:postId", posts.createComment)

  
  app.use('/api/posts', router);
  

};  