/* Empty JS object to act as endpoint for all routes */
let projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));
const port = 3000;

/* Spin up the server*/
const server = app.listen(port, listening);
 function listening() {
    console.log(`Running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);
function sendData (req, res) {
  res.send(projectData);
};

// POST route
app.post('/weather', addAnimal);
function addAnimal (req, res) {
    projectData = req.body;
    res.send(projectData)
};

