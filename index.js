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
    let quoteType = req.body.type;
    let quotesArr = [...quotes];
    if(quoteType){
        quotesArr = quotes.filter((quote) => quote.type === quoteType);
    }
    let randomIndex = Math.floor( Math.random() * (quotesArr.length) );
    res.json(quotesArr[randomIndex]);
})
