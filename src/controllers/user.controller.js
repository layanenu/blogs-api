const { userService } = require('../services');

const createUser = async (req, res) => {
    const { type, message } = await userService.createUser(req.body);
    if (type) return res.status(type).json({ message });
    return res.status(201).json(message);
};

module.exports = {
  createUser,
};