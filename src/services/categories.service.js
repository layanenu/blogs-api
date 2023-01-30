const { Category } = require('../models');
  
const getAllCategories = async () => {
  const categories = await Category.findAll();
  if (categories) {
 return { type: 200, message: categories, 
  }; 
}
};

module.exports = {
  getAllCategories,
};  