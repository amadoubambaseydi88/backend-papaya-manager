const Harvest = require('../models/Harvest');
const Sale = require('../models/Sale');

const getDashboardStats = async (req, res, next) => {
    try {
        const harvests = await Harvest.find();
        const sales = await Sale.find();

        const totalHarvestedKg = harvests.reduce((acc, curr) => acc + curr.quantity, 0);
        const totalHarvestedValue = harvests.reduce((acc, curr) => acc + curr.totalAmount, 0);
        const totalSalesValue = sales.reduce((acc, curr) => acc + curr.totalAmount, 0);
        const totalSoldKg = sales.reduce((acc, curr) => acc + curr.quantity, 0);
        const currentStock = totalHarvestedKg - totalSoldKg;
        const uniqueClients = new Set(sales.map(s => s.client)).size;

        res.status(200).json({
            totalHarvestedKg,
            totalHarvestedValue,
            totalSalesValue,
            totalSoldKg,
            currentStock,
            uniqueClients
        });
    } catch (error) { next(error); }
};

module.exports = { getDashboardStats };