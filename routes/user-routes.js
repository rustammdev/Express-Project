const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const {
  regUser,
  loginUser,
  currentUser,
} = require('../controllers/user-controller');

const router = express.Router();

router.post('/register', regUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);

module.exports = router;
