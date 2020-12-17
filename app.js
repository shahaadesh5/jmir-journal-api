const express = require('express'); //importing express
const app = express();  // this indicates app is using express method to run

//defining the path to the journal route API file:
const journalRoutes = require('./api/routes/journal');

//running the app by sending requests to appropriate routes:
app.use('/journal', journalRoutes);

//exporting the app to run on the server
module.exports = app;