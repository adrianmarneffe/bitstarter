var express = require('express');
var fs = require ("fs");
var app = express.createServer(express.logger());


var page = fs.readFileSync('index2.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

var htmlpage = buffer.toString ('data');

app.get('/', function(request, response) {
  response.send ('htmlpage');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
