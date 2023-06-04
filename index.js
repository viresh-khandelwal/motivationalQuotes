const express = require('express');

expressServer = express();
const port = 3000;
expressServer.listen(port, () => {
    console.log('server started');
});

expressServer.get('/motivationalQuotes', (req,res) => {
    console.log('my first route');
    res.send('my first response');
})
