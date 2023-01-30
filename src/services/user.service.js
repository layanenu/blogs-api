const { User } = require('../models');
const { generateToken } = require('../utils/JWT');
const userSchema = require('./validations/schemas');

const createUser = async ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) return { type: 400, message: error.details[0].message };
  const getUserEmail = await User.findOne({ where: { email } });
  if (getUserEmail) return { type: 409, message: 'User already registered' };
  const userCreate = await User.create({ displayName, email, password, image });
  const token = generateToken(userCreate.dataValues);
  return { type: null, message: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  if (users) {
    return { type: 200,
    message: users.map((user) => {
          const { password, ...rest } = user.dataValues;
          return rest;
  }), 
}; 
  }
};

module.exports = {
  createUser,
  getAllUsers,
};  