const express = require('express');
const router = express.Router();
const businessesController = require('../controllers/businesses');

/**
 * @swagger
 * /businesses:
 *   get:
 *     summary: Retrieve all businesses
 *     responses:
 *       200:
 *         description: A list of businesses
 *       500:
 *         description: Internal server error
 */
router.get('/', businessesController.getAllBusinesses);

/**
 * @swagger
 * /businesses/category/{category}:
 *   get:
 *     summary: Retrieve businesses by category
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Category to filter businesses
 *     responses:
 *       200:
 *         description: A list of businesses in the category
 *       500:
 *         description: Internal server error
 */
router.get('/category/:category', businessesController.getBusinessesByCategory);

/**
 * @swagger
 * /businesses/{id}:
 *   get:
 *     summary: Retrieve a business by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the business to retrieve
 *     responses:
 *       200:
 *         description: Business details
 *       404:
 *         description: Business not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', businessesController.getBusinessById);

/**
 * @swagger
 * /businesses:
 *   post:
 *     summary: Create a new business
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               category:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *               email:
 *                 type: string
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Business created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', businessesController.createBusiness);

/**
 * @swagger
 * /businesses/{id}:
 *   put:
 *     summary: Update a business by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the business to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               address:
 *                 type: string
 *               category:
 *                 type: string
 *               contactPerson:
 *                 type: string
 *               email:
 *                 type: string
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Business updated successfully
 *       404:
 *         description: Business not found
 *       400:
 *         description: Bad request
 */
router.put('/:id', businessesController.updateBusiness);

/**
 * @swagger
 * /businesses/{businessId}/bookings/date/{date}:
 *   get:
 *     summary: Retrieve bookings for a business by date
 *     parameters:
 *       - in: path
 *         name: businessId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the business
 *       - in: path
 *         name: date
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Date to filter bookings
 *     responses:
 *       200:
 *         description: A list of bookings for the business on the specified date
 *       500:
 *         description: Internal server error
 */
router.get('/:businessId/bookings/date/:date', businessesController.getBookingsByBusinessAndDate);

module.exports = router;
