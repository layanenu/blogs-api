const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = (payload) =>
  jwt.sign(payload, TOKEN_SECRET, {
    algorithm: 'HS256',
  });

const authenticateToken = async (token) => {
  if (!token) {
    const error = new Error('Token not found');
    error.status = 401;
    throw error;
  }

  try {
    const verificationResponse = await jwt.verify(token, TOKEN_SECRET);
    return verificationResponse;
  } catch (err) {
    const error = new Error('Expired or invalid token');
    error.status = 401;
    throw error;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};