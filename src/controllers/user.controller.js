const { userService } = require('../services');

const createUser = async (req, res) => {
    const { type, message } = await userService.createUser(req.body);
    if (type) return res.status(type).json({ message });
    return res.status(201).json(message);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users.message);
};

module.exports = {
  createUser,
  getAllUsers,
};
