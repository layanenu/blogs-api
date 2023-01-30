const { postService } = require('../services');

const getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.status(200).json(posts.message);
};

module.exports = {
  getAllPosts,
};  