import Post from '../models/Post';

// get all posts
export function getAllPosts(req, res, next) {
  Post.find()
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

// get one post by id
export function getPostById(req, res, next) {
  const id = req.params.id;

  Post.findById(id)
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

// create post
export function createPost(req, res, next) {
  const title = req.body.title;
  const content = req.body.content;

  if (!title || !content) {
    res.status(500).json({ error: 'All Fields Are Required.' });
  }

  const post = new Post({
    title,
    content
  });

  post.save()
  .then((post) => {
    res.status(201).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// update post by id
export function updatePost(req, res, next) {
  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body)
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// delete post by id
export function deletePost(req, res, next) {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
  .then((post) => {
    res.status(204).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}