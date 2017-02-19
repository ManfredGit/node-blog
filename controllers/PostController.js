const Post = require('../models/Post');
const User = require('../models/User');

// get all posts
exports.getAllPosts = function (req, res, next) {

  Post.find((err, posts) => {
    if (err) {
      res.json({ err });
    }
    res.json({ posts });
  });

};


// get post by id
exports.getPostById = function (req, res, next) {
  const id = req.params.id;

  Post.findById(id, (err, post) => {
    if (err) {
      res.json({ err });
    }
    res.json({ post });
  });
};

// create post
exports.createPost = function (req, res, next) {
  const post = new Post(req.body);

  post.save((err, post) => {
    if (err) {
      res.json({ err });
    }
    res.json({ post });
  });
};


// update post by id
exports.updatePost = function (req, res, next) {
  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body, (err, post) => {
    if (err) {
      res.json({ err });
    }
    res.json({ message: `${post.title} was updated.` });
  });
};

// delete post by id
exports.deletePost = function (req, res, next) {
  const id = req.params.id;

  Post.findByIdAndRemove(id).exec((err, post) => {
    if (err) {
      res.json({ err });
    }
    res.json({ message: `${post.title} was deleted.` });
  });
};