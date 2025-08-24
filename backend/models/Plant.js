const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    categories: [{ type: String, trim: true }],
    available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Plant', PlantSchema);
