const db = require("../models");
const posts = db.posts;
const Op = db.Sequelize.Op;
const comments = db.comments;





// this file contain posts and comments controllers

// Create and Save a new post
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  // Create a post
  const post = {
    user: req.body.user,
    description: req.body.description,
    profession: req.body.profession,
    available: req.body.available 
  };

  // Save post in the database
  posts.create(post)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the post."
      });
    });
};

// Retrieve all posts from the database.
exports.findAll = (req, res) => {
    const user = req.query.user;
    var condition = user ? { user: { [Op.like]: `%${user}%` } } : null;
  
    posts.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  };

// Find a single post with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    posts.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving post with id=" + id
        });
      });
  };

// Update a post by the id in the request
exports.like = (req, res) => {
  const id = req.params.id;
  username = req.params.username;
  

  posts.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      likes += 1;
      if (num == 1) {
        res.send({
          message: "post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating post with id=" + id
      });
    });
};
exports.unlike = (req, res) => {
  const id = req.params.id;
  username = req.params.username;
  

  posts.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      likes -= 1;
      if (num == 1) {
        res.send({
          message: "post was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update post with id=${id}. Maybe post was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating post with id=" + id
      });
    });
};
// Delete a post with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    posts.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "post was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete post with id=${id}. Maybe post was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete post with id=" + id
        });
      });
  };

// Delete all posts from the database.
exports.deleteAll = (req, res) => {
    post.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} posts were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all posts."
        });
      });
  };

// Find all available posts
exports.findAllavailable = (req, res) => {
  posts.findAll({ where: { available: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};
exports.findAllNonavailable = (req, res) => {
  posts.findAll({ where: { available: false } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
};
//comments

exports.createComment = (req, res) => {
  // Validate request
  if (!req.body.text) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// Create a comment
const comment = {
  user: req.body.user,
  postId: req.params.postId,
  text: req.body.text,
};

// Save comment in the database
comments.create(comment)
  .then(data => {
    console.log(comment,data)
    res.send(data,'chkara7oms');
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the comment."
    });
  });
};
// Delete a comment with the specified id in the request
exports.delete = (req, res) => {
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  comments.destroy({
    where: { postId: postId , commentId : commentId }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "comment was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete comment with id=${commentId}. Maybe comment was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete comment with id=" + commentId
      });
    });
};
