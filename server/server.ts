/// <reference path="../typings/tsd.d.ts" />


import express = require('express');
import http = require('http');

var app: express.Express = express();

app.get('/hello.txt', function(req: express.Request, res: express.Response) : any {
  res.send('Hello World');
});

app.use('/', express.static('out/client/'));


/* NOTE: No need to run the server here, we use grunt for that 
 * (see the "Server" option at https://github.com/blai/grunt-express to see how this works.)
 * 
var server: http.Server = app.listen(getPort(), function(): any {
    console.log('Listening on port %d', server.address().port);
});
 *
 */
console.log('server.ts loaded.');

module.exports = app;
