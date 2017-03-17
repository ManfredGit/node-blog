import User from '../models/User';


// get user by id
export function getUserById(req, res, next) {
  const id = req.params.id;

  User.findById((err, user) => {
    if (err) {
      res.status(500).json({ err });
    }
    res.status(200).json({ user });
  });
}


export function createUser(req, res, next) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;

  const user = new User({
    name,
    username,
    email
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).json({ err });
    }
    res.status(201).json({ user });
  });
}


// update user by id
export function updateUser(req, res, next) {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) {
      res.status(500).json({ err });
    }
    res.status(200).json({ user });
  });
}


// delete user by id
export function deleteUser(req, res, next) {
  const id = req.params.id;

  User.findByIdAndRemove(id).exec((err, user) => {
    if (err) {
      res.status(500).json({ err });
    }
    res.status(204).json({ user });
  });

}