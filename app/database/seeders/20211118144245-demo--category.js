'use strict';

const { Category } = require('../../models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Category.create({
      description: "Musica"
    }),

    Category.create({
      description: "Comida"
    }),

    Category.create({
      description: "Arte"
    }),

    Category.create({
      description: "Musica"
    }),

    Category.create({
      description: "Animales"
    }),

    Category.create({
      description: "Paisajes"
    }),

    Category.create({
      description: "Tecnologia"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.bulkDelete('category', null,{})

    ])
  }
};
