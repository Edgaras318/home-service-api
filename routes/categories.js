const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories');

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Retrieve all categories
 *     responses:
 *       200:
 *         description: A list of categories
 *       500:
 *         description: Internal server error
 */
router.get('/', categoriesController.getAllCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               backgroundColor:
 *                 type: string
 *               iconUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', categoriesController.createCategory);

module.exports = router;
