const express = require('express');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');

module.exports = function (app) {

  // api routes
  const apiRoutes = express.Router();
  const userRoutes = express.Router();
  const postRoutes = express.Router();

  // user routes

  // append user routes to api routes
  apiRoutes.use('/user', userRoutes);

  // register user
  userRoutes.post('/register', UserController.register);

  // user sign in
  userRoutes.post('/sign-in', UserController.signin);

  // get user by id
  userRoutes.get('/:id', UserController.getUserById);

  // update user by id
  userRoutes.put('/update/:id', UserController.updateUser);

  // delete user by id
  userRoutes.delete('/delete/:id', UserController.deleteUser);


  // post routes

  // append user routes to api routes
  apiRoutes.use('/posts', postRoutes);

  // get all posts
  postRoutes.get('/all', PostController.getAllPosts);

  // get user by id
  postRoutes.get('/:id', PostController.getPostById);

  // create user
  postRoutes.post('/new', PostController.createPost);

  // update user by id
  postRoutes.put('/update/:id', PostController.updatePost);

  // delete user by id
  postRoutes.delete('/delete/:id', PostController.deletePost);


  // final subgroup
  app.use('/api', apiRoutes);

};