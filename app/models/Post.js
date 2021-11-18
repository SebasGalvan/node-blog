'use strict';

module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          meg: "The title must be at least six characters long."
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }},
    {
        timestamps: true,
        updatedAt: false,
        tableName: 'posts',
    });

  // Associations

  Post.associate = function (models) {
    Post.belongsTo(models.Category)
  };
  return Post;
};