/* Basic properties for express, body-parser, and controllers route */
const express = require('express')
const bodyParser = require('body-parser');

// Import routes
const authRouter = require('./routes/auth/authRoutes');
const searchRoute = require('./routes/searchRoute');
const sheetRoute = require('./routes/sheetRoute');

const dotenv = require('dotenv');
dotenv.config();

/* Necessary variables */
const main = express();

main.use(bodyParser.json());
main.use(bodyParser.urlencoded ({
    extended: false
}));

// Use route
main.use(authRouter);
main.use('/search', searchRoute);
main.use('/sheet', sheetRoute);

// server
const PORT = process.env.APP_PORT || 3000;
main.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});