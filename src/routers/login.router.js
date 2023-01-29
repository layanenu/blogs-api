const { Router } = require('express');

const { loginController } = require('../controllers');

const routers = Router();

routers.post('/', loginController.login);

module.exports = routers;