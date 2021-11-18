'use strict';

module.exports = (sequelize, DataTypes) => {

  const Category = sequelize.define('Category', {

    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {

    timestamps: false,
    tableName: 'category',
    
  });

  Category.associate = function(models) {
    Category.hasMany(models.Post, {
      as: "posts",
      foreignKey: "categoryId"
    });
  }

  return Category;
};