const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

// Autorise toutes les origines (Vercel, localhost, etc.)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes API
app.use('/api/harvests', require('./routes/harvestRoutes'));
app.use('/api/sales', require('./routes/saleRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// Route de test
app.get('/', (req, res) => {
    res.send('API Papaya Manager est en ligne !');
});

// Gestion des erreurs
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Serveur démarré sur le port ${PORT}`));