const { postService } = require('../services');
const { BlogPost, Category, User } = require('../models');

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.status(200).json(posts.message);
};

const getPostById = async (req, res) => {
  try {
    const post = await BlogPost.findOne({
      where: { id: req.params.id },
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
        model: Category, as: 'categories' }],
    });

    if (!post) {
      return res.status(404).send({ message: 'Post does not exist' });
    }

    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};  