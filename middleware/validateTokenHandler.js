const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader =
    req.header.Authorization || req.header.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    jwt.verify(
      tekon,
      process.env.ACCESS_SECRET_TOKEN,
      
      (err, decoded) => {
        if (err) {
          res.status(401);
          throw new Error('User is not authorithed');
        }
        console.log(decoded);
      }
    );
  }
});

module.exports = validateToken;
