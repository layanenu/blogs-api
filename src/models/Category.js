const { PostCategory } = require('../models/PostCategory');

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'categories',
      timestamps: false,
      underscored: true,
    });


    Category.associate = (models) => {
      Category.belongsToMany(models.PostCategory, {
        as: 'posts',
        through: 'PostCategory',
        foreignKey: 'post_id', 
        otherKey: 'category_id',
      });
  };
    return Category;
  };