const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { connectToDb, PORT } = require("./config/db");

const categoriesRoutes = require('./routes/categories');
const businessesRoutes = require('./routes/businesses');
const bookingsRoutes = require('./routes/bookings');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors()); // Make sure to call the cors function
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/categories', categoriesRoutes);
app.use('/api/businesses', businessesRoutes);
app.use('/api/bookings', bookingsRoutes);

// Error handling middleware
app.use(errorHandler);

connectToDb()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("Failed to connect to the database", err);
    });
