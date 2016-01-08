
/**
* This server uses Node and ExpressJS to serve a simple home page.
* Currently, the server is not required for anything in the index.html
* to function.
*/

// load the express package and create the app
var express = require('express'),
	app     = express(),
	path = require('path');

// send the index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// start the server
app.listen(8080);
console.log('There is a hell of a universe on port 8080!');