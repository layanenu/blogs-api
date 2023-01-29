const { Router } = require('express');

const { userController } = require('../controllers');

const routers = Router();

routers.post('/', userController.createUser);

module.exports = routers;
