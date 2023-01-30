const { categoriesService } = require('../services');

const getAllCategories = async (req, res) => {
  const categories = await categoriesService.getAllCategories();
  res.status(200).json(categories.message);
};

module.exports = {
  getAllCategories,
};  