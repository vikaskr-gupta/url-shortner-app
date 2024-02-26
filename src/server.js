const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./db.js');
const urlRoutes = require('./routes/urlRoutes');
const app = express();
const PORT = 3000;

//connect to the database
dbConnect();

//middleware
app.use(bodyParser.json());

//middleware to serve static files
app.use('/', urlRoutes);
app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`Listening on port no.${PORT}`);
})