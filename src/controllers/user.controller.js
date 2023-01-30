const { userService } = require('../services');
const { User } = require('../models');

const createUser = async (req, res) => {
    const { type, message } = await userService.createUser(req.body);
    if (type) return res.status(type).json({ message });
    return res.status(201).json(message);
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users.message);
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ['password'] },
    });
    console.log(user);

    if (!user) {
      return res.status(404).send({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
