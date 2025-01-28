const mongoose = require('mongoose');


const shoeSchema = new mongoose.Schema({
  shoeType: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  size: {
    type: String,
    required: true
  },
  intrestLevel: {
    type: String,
    required: true
  },
  image: {
    type:String
  }
});


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shoes: [shoeSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
