/* Empty JS object to act as endpoint for all routes */
projectData = {};
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// const apiKey = 'c30f1db79fb2111584ed06ef0b4c2e67&units=imperial&units=imperia';
// const countryCode = `us`;
/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));
const port = 3000;

/* Spin up the server*/
const server = app.listen(port, listening);
 function listening() {
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);
function sendData (req, res) {
  console.log('res get data:', res)
  res.send(projectData);
};

// POST route
const data = [];
app.post('/weather', addAnimal);
function addAnimal (req, res) {
    projectData = req.body;
    res.send(projectData)
};

