// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require('express');
const port = 8000;

// Start up an instance of app
const app = express();

/* Dependencies */
const cors = require('cors');

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
app.listen(port, startServer);

// Callback to debug
function startServer() {
    console.log(`The server is up and running on port: ${port}`);
}

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  