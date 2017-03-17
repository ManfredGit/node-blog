import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  username: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: true
  }
  // password: {
  //   type: String,
  //   default: '',
  //   required: true
  // }
});

// hash user's password before saving to db
// UserSchema.pre('save', function (next) {
//   const user = this;

//   if (!user.isModified('password')) { 
//     return next();
//   }

//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, null, (err, hash) => {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// // compare password of logging in
// UserSchema.methods.comparePassword = (candidatePassword, cb) => {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) { 
//       return cb(err); 
//     }
//     cb(null, isMatch);
//   });
// };

export default mongoose.model('User', UserSchema);