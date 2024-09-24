const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    address: { type: String, required: false, default: ""  },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    photos: [String]
}, {
    timestamps: true // Prideda createdAt ir updatedAt laukus
});

module.exports = mongoose.model('Business', businessSchema);
