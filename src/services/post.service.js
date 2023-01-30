const { BlogPost, User, Category } = require('../models');
  
const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, {
      model: Category, as: 'categories' }],
  });
  if (posts) {
 return { type: 200, message: posts, 
  }; 
}
};

module.exports = {
  getAllPosts,
};  