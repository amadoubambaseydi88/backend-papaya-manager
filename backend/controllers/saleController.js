const Sale = require('../models/Sale');
const Harvest = require('../models/Harvest');

const getSales = async (req, res, next) => {
    try {
        const sales = await Sale.find().sort({ date: -1 });
        res.status(200).json(sales);
    } catch (error) { next(error); }
};

const createSale = async (req, res, next) => {
    try {
        const { date, client, quantity, pricePerKg } = req.body;

        // Vérification du stock disponible
        const harvests = await Harvest.find();
        const totalHarvested = harvests.reduce((acc, curr) => acc + curr.quantity, 0);
        const sales = await Sale.find();
        const totalSold = sales.reduce((acc, curr) => acc + curr.quantity, 0);
        const currentStock = totalHarvested - totalSold;

        if (quantity > currentStock) {
            res.status(400);
            throw new Error(`Stock insuffisant. Disponible: ${currentStock} kg`);
        }

        const totalAmount = quantity * pricePerKg;
        const sale = await Sale.create({ date, client, quantity, pricePerKg, totalAmount });
        res.status(201).json(sale);
    } catch (error) { next(error); }
};

module.exports = { getSales, createSale };