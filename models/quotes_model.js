const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    content : String,
    author: String     
})

module.exports = mongoose.model('Quotes', quotesSchema);