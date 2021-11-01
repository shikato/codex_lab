/* Write a http client. */
var http = require('http');
var url = 'http://www.google.com';
http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
}).on('error', function(e) {
  console.log('Got error: ' + e.message);
});

