'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      postId: {
        allowNull: false,
        field: 'post_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        field: 'category_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('posts_categories');
  },
};
