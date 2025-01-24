var http = require('http');

var fs = require('fs');

var url = require('url');

http.createServer(function (req, res) {
  fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  fs.readFile('demofile2.html', function(err, data) {
    currentUrl = url.parse(req.url, true);
    console.log(currentUrl);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });



}).listen(10000);

