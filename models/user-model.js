const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add the user name'],
    },
    email: {
      type: String,
      reuqired: [true, 'Please add the email adress'],
      uniqe: [true, 'This email adrss alredy taken'],
    },
    password: {
      type: String,
      required: [true, 'Please add the user password'],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", userSchema)
