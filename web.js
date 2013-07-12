var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());
var http = require ('http');

var page = fs.readFileSync('./index2.html');



app.get('/', function(request, response) {
   response.writeHead (200, {'Content-Type': 'text/plain'}); 
   response.end (page);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
