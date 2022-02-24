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
app.get('/all', getData);

// Callback function to complete GET '/all'
function getData(request, response) {
    response.send(projectData);
}

// Post Route
app.post('/post', postData);

// Callback function to post data
function postData(request, response) {
    // Clear the object
    projectData = {};

    // Set the object based on the data we received
    projectData = {
        temperature: request.body.temperature,
        date: request.body.date,
        content: request.body.content
    }

    // Send a response with the filled object
    response.send(projectData);
}