const express = require('express');
const router = express.Router();

const PostsController =  require('../controllers/PostController')
const validations =  require('../validations/PostValidation');

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         title:
 *           type: string
 *           description: The post title
 *         content:
 *           type: string
 *           description: The content of the post 
 *         image:
 *           type: string
 *           description: The image of the post 
 *       example:
 *         id: 7
 *         title: ¿Como comer una naranja?
 *         content: Coloca la naranja sobre una tabla de cortar con la parte del tallo apuntando hacia arriba.
 *         image: https://pbs.twimg.com/media/Dg6TRdsWkAA5NZl.jpg
 */

 /**
  * @swagger
  * tags:
  *   name: Posts
  *   description: The posts managing API
  */


/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Returns the list of posts.
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: The list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some error happened
 */
router.get('/', PostsController.getPosts);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The post id
 *     responses:
 *       200:
 *         description: The post description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: The post was not found
 *       500:
 *        description: Some error happened
 */
 router.get('/:id', PostsController.getPost);



/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */
router.post('/', validations.image ,PostsController.setPost);

/**
 * @swagger
 * /posts/{id}:
 *  patch:
 *    summary: Update the post by the id
 *    tags: [Posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The post id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: The post was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: The post was not found
 *      500:
 *        description: Some error happened
 */
router.patch('/:id', PostsController.updatePost);
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Remove the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The post id
 * 
 *     responses:
 *       200:
 *         description: The post was deleted
 *       404:
 *         description: The post was not found
 */
router.delete('/:id', PostsController.deletePost);




module.exports = router;