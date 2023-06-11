const express = require('express');
const quotes = require('./data/quotes.json');
const mongoose = require('mongoose');

expressServer = express();
expressServer.use(express.json()); //this is written to make the code able to fetch body from request body
const port = 3000;

const db_user_name = 'viresh';
const db_pwd = 'Viresh%4019'; //actual password is Viresh@19 but @ needs to be url encoded to %40
const DB_URL = `mongodb+srv://${db_user_name}:${db_pwd}@mongo-db-learning.82bygnn.mongodb.net/?retryWrites=true&w=majority`;

//start server
expressServer.listen(port, () => {
    console.log('server started');
});

//connect to database
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.once('open', () => {
    console.log('db connected');
})

expressServer.get('/motivationalQuotes', (req,res) => {
    console.log(req.body);
    let selectedQuoteTypes = req.body.types;
    let quotesArr = [];
    if(selectedQuoteTypes){
        quotesArr = quotes.filter((quote) => {
           if(selectedQuoteTypes.indexOf(quote.type) !== -1){
               return true;
           }
        });
    }
    let randomIndex = Math.floor( Math.random() * (quotesArr.length) );
    res.json(quotesArr[randomIndex]);
})

expressServer.get('/favoriteQuotes', (req,res) => {
    console.log(req.body);
    let favoriteQuoteIds = req.body.IDs;
    let quotesArr = [];
    if(favoriteQuoteIds){
        quotesArr = quotes.filter((quote) => {
           if(favoriteQuoteIds.indexOf(quote.id) !== -1){
               return true;
           }
        });
    }
    let randomIndex = Math.floor( Math.random() * (quotesArr.length) );
    res.json(quotesArr[randomIndex]);
})
