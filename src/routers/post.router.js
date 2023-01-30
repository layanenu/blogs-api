const { Router } = require('express');

const { postController } = require('../controllers');
const { auth, error } = require('../middlewares');

const routers = Router();

routers.get('/', auth, error, postController.getAllPosts);
routers.get('/:id', auth, error, postController.getPostById);

module.exports = routers;
