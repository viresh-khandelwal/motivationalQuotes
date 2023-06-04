const express = require('express');

expressServer = express();
const port = 3000;
expressServer.listen(port, () => {
    console.log('server started');
});
