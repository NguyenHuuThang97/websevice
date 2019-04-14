var mongooes = require("mongoose");
var Schema = mongooes.Schema;
var bcrypt = require('bcrypt');


var UserSchema = new Schema({
    fullName: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true
    },
    hash_password: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  });
  UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
  };

var User = mongooes.model('User', UserSchema);

module.exports = User;