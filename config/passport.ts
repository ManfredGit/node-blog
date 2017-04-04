// import * as passport from 'passport';
// import User from '../models/User';
// import config from './main';
// import { JwtStrategy, ExtractJwt } from 'passport-jwt';
// import * as LocalStrategy from 'passport-local';

// // Setting username field to email rather than username
// const localOptions = {
//   usernameField: 'email'
// };

// // Setting up local login strategy
// const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
//   User.findOne({ email }, (err, user) => {
//     if (err) { return done(err); }
//     if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

//     user.comparePassword(password, (err, isMatch) => {
//       if (err) {
//         return done(err);
//       }
//       if (!isMatch) {
//         return done(null, false, { error: 'Your login details could not be verified. Please try again.' });
//       }

//       return done(null, user);
//     });
//   });
// });

// // Setting JWT strategy options
// const jwtOptions = {
//   // extract jwt from header
//   jwtFromRequest: ExtractJwt.fromAuthHeader(),
//   // secret from config/main
//   secretOrKey: config.secret
// };

// // Setting up JWT login strategy
// const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
//   User.findById(payload._id, (err, user) => {
//     if (err) { return done(err, false); }

//     if (user) {
//       done(null, user);
//     } else {
//       done(null, false);
//     }
//   });
// });

// passport.use(jwtLogin);
// passport.use(localLogin);
