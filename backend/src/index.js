/* IMPORTS */
require('dotenv').config();
const { join } = require('path');
const express = require('express');

/* SERVER */
const app = express();

// Get the port from the '.env' file, or default to 8080
const port = PROCESS.ENV.PORT || 8080;

// Serve Static Files from the Frontend's 'dist' folder
app.use(express.static(join(__dirname, '../../frontend/dist')));

// Initialize the Server on localhost, at the defined port
app.listen(port, () => console.log(`The Solar System is live at http://localhost:${port}`));
