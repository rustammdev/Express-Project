const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');

//@desc Register user
//@route POST /api/users/register
//@access public
const regUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
  }

  // User malumotlarni mavjudllikka tekshirish
  const userAviable = await User.findOne({ email });
  if (userAviable) {
    res.status(400);
    throw new Error('User malumotlari allaqachon mavjud');
  }

  // Hashed password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log('User created succesfully: ' + user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error('User data is not a valid');
  }
  res.json({ message: 'User register' });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login user' });
});

//@desc Current user information
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Current user information' });
});

module.exports = { regUser, loginUser, currentUser };

// 1:10
