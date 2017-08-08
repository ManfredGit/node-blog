import * as express from 'express';
import { getUserById, createUser, updateUser, deleteUser } from '../controllers/UserController';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/PostController';


export default (app) => {

  // api routes
  const apiRoutes = express.Router();
  const userRoutes = express.Router();
  const postRoutes = express.Router();



  /********************************
  === user endpoints
  ********************************/

  // append user routes to api routes
  apiRoutes.use('/users', userRoutes);

  // get user by id
  userRoutes.get('/:id', getUserById);

  // create user
  userRoutes.post('/', createUser);

  // update user by id
  userRoutes.put('/:id', updateUser);

  // delete user by id
  userRoutes.delete('/:id', deleteUser);


  
  
  /********************************
  === post endpoints
  ********************************/

  // append user routes to api routes
  apiRoutes.use('/posts', postRoutes);

  // get all posts
  postRoutes.get('/', getAllPosts);

  // get user by id
  postRoutes.get('/:id', getPostById);

  // create user
  postRoutes.post('/', createPost);

  // update user by id
  postRoutes.put('/:id', updatePost);

  // delete user by id
  postRoutes.delete('/:id', deletePost);


  /********************************
  === append apiRoutes to app
  ********************************/

  app.use('/api/v1', apiRoutes);

};