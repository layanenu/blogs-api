module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image:{
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'users',
      timestamps: false,
      underscored: true,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'userId',
        as: 'blogposts',
      });
    };

    return User;
  };