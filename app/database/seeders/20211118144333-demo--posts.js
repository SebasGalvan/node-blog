'use strict';

const { Post } = require('../../models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Post.create(
      {
      title:'Titulo de mi Posyt #1',
      image: 'mi_imagen.jpg',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis",
    }),

    Post.create(
      {
      title:'Titulo de mi Posyt #2',
      image: 'mi_imagen2.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #3',
      image: 'mi_imagen3.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #4',
      image: 'mi_imagen4.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #5',
      image: 'mi_imagen5.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #6',
      image: 'mi_imagen6.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #7',
      image: 'mi_imagen12.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #8',
      image: 'mi_imagen7.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #9',
      image: 'mi_imagen8.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    }),
    Post.create(
      {
      title:'Titulo de mi Posyt #10',
      image: 'mi_imagen9.png',
      content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint saepe nesciunt dignissimos provident id officia, dolorem laboriosam quasi laborum minima amet unde, nulla reiciendis corrupti in, eius ipsam blanditiis.",
    })
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.bulkDelete('posts', null,{}),

    ])
  }
};
