const express = require('express');
const router = express.Router();

const CategoryController =  require('../controllers/CategoryController')
//Category


/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the category
 *         description:
 *           type: string
 *           description: The category description
 *       example:
 *         id: 2
 *         description : Diseño
 */


 /**
  * @swagger
  * tags:
  *   name: Category
  *   description: The categories managing API
  */

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Returns the list of categories.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */

router.get('/', CategoryController.getCategories);

module.exports = router;