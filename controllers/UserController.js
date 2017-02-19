const User = require('../models/User');


// create a new user
exports.createUser = function (req, res, next) {
  if (!req.body) {
    res.json({ err });
  }
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      res.json({ err });
    }
    res.json({ user });
  });
};


// get user by id
exports.getUserById = function (req, res, next) {
  const id = req.params.id;

  User.findById((err, user) => {
    if (err) {
      return next(err);
    }
    res.json({ user });
  });
};


// update user by id
exports.updateUser = function (req, res, next) {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) {
      return next(err);
    }
    res.json({ message: `${user.name} was updated.` });
  });
};


// delete user by id
exports.deleteUser = function (req, res, next) {
  const id = req.params.id;

  User.findByIdAndRemove(id).exec((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: 'User was deleted.' });
  });
};



// sign in
exports.signin = function (req, res, next) {
  // add later
};