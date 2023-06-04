const express = require('express');
const quotes = require('./data/quotes.json');

expressServer = express();
expressServer.use(express.json()); //this is written to make the code able to fetch body from request body
const port = 3000;
expressServer.listen(port, () => {
    console.log('server started');
});

expressServer.get('/motivationalQuotes', (req,res) => {
    console.log('my first route');
    console.log(req.body);
    res.json(quotes);
})
