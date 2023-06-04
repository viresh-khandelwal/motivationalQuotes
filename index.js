const express = require('express');
const quotes = require('./data/quotes.json');

expressServer = express();
const port = 3000;
expressServer.listen(port, () => {
    console.log('server started');
});

expressServer.get('/motivationalQuotes', (req,res) => {
    console.log('my first route');
    res.json(quotes);
})
