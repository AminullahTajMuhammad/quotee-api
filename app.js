const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Create Express App.
const app = express();

//Create Database
mongoose.connect("mongodb+srv://admin:4xSiQyTTVuYOst0x@rubikkube.krfs2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected to MongoDB database");
});

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello World.");
});

const QuotesRoute = require('./routes/quotesRoute')
app.use('/quotes', QuotesRoute);

// Starting the server
app.listen(5000, console.log("Listening on port 5000"));