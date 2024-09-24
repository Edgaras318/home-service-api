const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    backgroundColor: { type: String, required: false, default: "#FFFFFF",  },
    iconUrl: { type: String, required: false, default: "http://example.com/default-icon.png", }
}, {
    timestamps: true // Prideda createdAt ir updatedAt laukus
});

module.exports = mongoose.model('Category', categorySchema);
