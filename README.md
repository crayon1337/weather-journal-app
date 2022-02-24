# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


## Installation
In order to install the application please execute `npm install` in the project directory to install the dependandenies 

Then execute `node server.js` to run the server and navigate to localhost:8000

## Blueprint I wrote to finish this project
1- Make sure NodeJS & Express is installed
2- Install dependencies using  npm install express cors body-parser
3- Configure NodeJS server using body-parser middleware and cors
4- Obtain API credentials from https://openweathermap.org/current#zip
5- Configure the API using API key
6- Setup the routes:
	GET projectData
	POST projectData
7- Write the needed functions to reterive data from the API
8- If it's running from localhost make sure to use CORS proxy (https://cors-anywhere.herokuapp.com/) 
9- Update the UI with Temperate, Date & User Input
