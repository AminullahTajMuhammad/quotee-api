const { json } = require('body-parser');
const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const Quotes = require('../models/quotes_model');

routes.get('/', async (req, res, err) => {
    const quote = await Quotes.find();
    res.status(200).send(quote);
});

routes.post('/add', async (req, res, err) => {

    const newQuote = new Quotes(req.body);
    const saveQuotes = await newQuote.save();
    res.json(saveQuotes)
    //res.status(201).send()
});

// Get Single Quote
routes.get('/get/:id', async (req, res) => {
    const q = await Quotes.findById({ _id: req.params.id});
    res.json(q); 
})

// Delete Quote
routes.delete('/delete/:id', async (req, res) => {
    const q = await Quotes.findByIdAndDelete({ _id: req.params.id });
    res.json(q);
})


// Update Quotes
routes.patch('/update/:id', async (req, res) => {
    const q = await Quotes.updateOne({ _id: req.params.id },{ $set: req.body });
    res.json(q);
})

//Random Quotes
routes.get('/random', async (req, res) => {
    const count = await Quotes.countDocuments();
    const random = Math.floor(Math.random() * count);
    const q = await Quotes.findOne().skip(random);

    res.json(q);
})

module.exports = routes;