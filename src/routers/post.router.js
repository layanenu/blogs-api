const { Router } = require('express');

const { postController } = require('../controllers');
const { auth, error } = require('../middlewares');

const routers = Router();

routers.get('/', auth, error, postController.getAllPosts);

module.exports = routers;
