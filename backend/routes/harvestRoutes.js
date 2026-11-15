const express = require('express');
const router = express.Router();
const { getHarvests, createHarvest } = require('../controllers/harvestController');

router.route('/').get(getHarvests).post(createHarvest);

module.exports = router;