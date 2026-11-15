const Harvest = require('../models/Harvest');

const getHarvests = async (req, res, next) => {
    try {
        const harvests = await Harvest.find().sort({ date: -1 });
        res.status(200).json(harvests);
    } catch (error) { next(error); }
};

const createHarvest = async (req, res, next) => {
    try {
        const { date, lot, quantity, pricePerKg } = req.body;
        if (!lot || !quantity || !pricePerKg) {
            res.status(400);
            throw new Error('Veuillez remplir tous les champs requis');
        }
        const totalAmount = quantity * pricePerKg;
        const harvest = await Harvest.create({ date, lot, quantity, pricePerKg, totalAmount });
        res.status(201).json(harvest);
    } catch (error) { next(error); }
};

module.exports = { getHarvests, createHarvest };