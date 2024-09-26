const Business = require('../models/business');
const Booking = require('../models/booking');

// GET /businesses
exports.getAllBusinesses = async (req, res) => {
    try {
        const businesses = await Business.find().populate('category');
        res.status(200).json(businesses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET /businesses/category/:category
exports.getBusinessesByCategory = async (req, res) => {
    try {
        const businesses = await Business.find({ category: req.params.category }).populate('category');
        res.status(200).json(businesses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET /businesses/:id
exports.getBusinessById = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id).populate('category');
        if (!business) return res.status(404).json({ message: 'Business not found' });
        res.status(200).json(business);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /businesses
exports.createBusiness = async (req, res) => {
    const business = new Business(req.body);

    try {
        const savedBusiness = await business.save();
        res.status(201).json(savedBusiness);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// PUT /businesses/:id
exports.updateBusiness = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id);
        if (!business) return res.status(404).json({ message: 'Business not found' });

        Object.assign(business, req.body);
        const updatedBusiness = await business.save();
        res.status(200).json(updatedBusiness);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// GET /businesses/:businessId/bookings/date/:date
exports.getBookingsByBusinessAndDate = async (req, res) => {
    // Implement booking retrieval based on business ID and date
    const { businessId, date } = req.params;
    try {
        const bookings = await Booking.find({ businessId, date });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
