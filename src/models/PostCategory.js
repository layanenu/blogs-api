module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreingKey: true,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.STRING,
        foreingKey: true,
        primaryKey: true,
      }
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    });

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'categories',
        through: PostCategory, // utilizando o model especificado na opção through como tabela de associação. 
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
      models.BlogPost.belongsToMany(models.Category, {
        as: 'posts',
        through: PostCategory,
        foreignKey: 'post_id', 
        otherKey: 'category_id',
      });
  };
  return PostCategory;
};