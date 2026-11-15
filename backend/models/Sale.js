const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    date: { type: Date, required: true, default: Date.now },
    client: { type: String, required: true },
    quantity: { type: Number, required: true }, // en kg
    pricePerKg: { type: Number, required: true },
    totalAmount: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);