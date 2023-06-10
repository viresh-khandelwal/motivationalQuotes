const express = require('express');
const quotes = require('./data/quotes.json');

expressServer = express();
expressServer.use(express.json()); //this is written to make the code able to fetch body from request body
const port = 3000;
expressServer.listen(port, () => {
    console.log('server started');
});

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
