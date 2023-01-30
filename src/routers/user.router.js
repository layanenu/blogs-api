const { Router } = require('express');

const { userController } = require('../controllers');
const { auth, error } = require('../middlewares');

const routers = Router();

routers.post('/', userController.createUser);
routers.get('/', auth, error, userController.getAllUsers);
routers.get('/:id', auth, error, userController.getUserById);

module.exports = routers;
