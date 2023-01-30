const { Router } = require('express');

const { categoriesController } = require('../controllers');
const { auth, error } = require('../middlewares');

const routers = Router();

routers.get('/', auth, error, categoriesController.getAllCategories);

module.exports = routers;
