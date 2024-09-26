const express = require('express');
const router = express.Router();
const businessesController = require('../controllers/businesses');

router.get('/', businessesController.getAllBusinesses);
router.get('/category/:category', businessesController.getBusinessesByCategory);
router.get('/:id', businessesController.getBusinessById);
router.post('/', businessesController.createBusiness);
router.put('/:id', businessesController.updateBusiness);
router.get('/:businessId/bookings/date/:date', businessesController.getBookingsByBusinessAndDate);

module.exports = router;
