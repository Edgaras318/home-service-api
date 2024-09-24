const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings');

router.get('/user/:email', bookingsController.getBookingsByUserEmail);
router.post('/', bookingsController.createBooking);
router.delete('/:id', bookingsController.deleteBooking);

module.exports = router;
