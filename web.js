var express = require('express');
var fs = require "fs");
var app = express.createServer(express.logger());
var page = fs.readFileSync (index2.html);
var htmlpage = buf.toString (page)
app.get('/', function(request, response) {
  response.send (htmlpage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
