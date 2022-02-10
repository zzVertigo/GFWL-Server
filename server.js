var http = require('http');
var https = require('https');
var express = require('express');
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var app = express();

app.get('/redirect', function(req, res) {
  res.statusCode = 307;
  res.setHeader("Location", 'http://10.0.0.215/getconfig');
  res.end();
});

app.get('/getconfig', function(req, res) {
  var file = __dirname + '\\config.xml';

  var filename = path.basename(file);
  var stat = fs.statSync(file);

  res.setHeader('Content-Disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Content-Length', stat.size);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.post('/authorization', function(req, res) {
  var file = __dirname + '\\auth.xml';
  var filename = path.basename(file);
  var stat = fs.statSync(file);

  var filestream = fs.readFileSync(file); 

  res.send(filestream);
  res.end();
});

app.post('/marketplace', function(req, res) {
  var file = __dirname + '\\readusersettings.xml';
  var filename = path.basename(file);
  var stat = fs.statSync(file);

  var filestream = fs.readFileSync(file); 

  res.setHeader('Content-Type', 'application/soap+xml');

  res.send(filestream);
  res.end();
});

var options = {
  key: fs.readFileSync(__dirname + '\\88767882_10.0.0.215.key'),
  cert: fs.readFileSync(__dirname + '\\88767882_10.0.0.215.cert'),
};

http.createServer(app).listen(80, () => {
  console.log('HTTP server running on port 80!');
});
https.createServer(options, app).listen(443, () => {
  console.log('HTTPS server running on port 443!');
});
