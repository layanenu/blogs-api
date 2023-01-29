const loginService = require('../services/login.service');

const login = async (req, res) => {
  try {
    const token = await loginService.loginAuthenticate(req.body);
    return res.status(200).json(token);
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = {
    login,
};