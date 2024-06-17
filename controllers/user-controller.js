const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
  // Login qilish vaqtida foydalanuvchi tomonidan kiritilgan password
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Malumotlar bo'sh bo'lmasligi kerak!");
  }

  // db dagi user malumotlarini email orqali qidirish type: hash
  const user = await User.findOne({ email });
  
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_SECRET_TOKEN,
      { expiresIn: '1m' }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error('Email or password not valid');
  }
});

//@desc Current user information
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.send("ok")
  res.json({ message: 'Current user information' });
});

module.exports = { regUser, loginUser, currentUser };

// 1:10
