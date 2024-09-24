const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    status: { type: String, default: 'Pending' }
}, {
    timestamps: true // Prideda createdAt ir updatedAt laukus
});

module.exports = mongoose.model('Booking', bookingSchema);
