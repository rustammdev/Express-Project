const express = require('express');
const {
  regUser,
  loginUser,
  currentUser
} = require('../controllers/user-controller');

const router = express.Router();

router.post('/register', regUser);

router.post('/login', loginUser);

router.get('/current', currentUser);

module.exports = router;
