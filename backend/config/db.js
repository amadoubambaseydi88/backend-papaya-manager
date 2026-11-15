const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connexion à MongoDB Atlas
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Atlas Connecté: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erreur de connexion DB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;