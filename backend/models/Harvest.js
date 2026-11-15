const mongoose = require('mongoose');

const harvestSchema = new mongoose.Schema({
    date: { type: Date, required: true, default: Date.now },
    lot: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true }, // en kg
    pricePerKg: { type: Number, required: true },
    totalAmount: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Harvest', harvestSchema);