var http = require('http')
  , server = http.createServer()
  , dish = require('dish');

var format = require('url').format
  , parse = require('url').parse
  , exists = require('fs').exists
  , resolve = require('path').resolve;

var port = process.env.NODE_WEBKIT_DEVTOOLS_PORT || 9090;

function handler (req, res) {
  var url, plate;
  try {
    url = parse(req.url, true);
    plate = resolve('./lib' + format(url.pathname));
  }
  catch (e) {
    res.writeHead(500);
    res.end();
    return;
  }
  if (req.url === '/') {
    res.statusCode = '302',
    res.setHeader('Location', 'inspector.html?host=localhost:9999&page=0');
    res.end();
  }
  else {
    exists(plate, function (found) {
      if (found) {
        dish.file(plate)(req, res);
      }
      else {
        res.writeHead(404);
        res.end();
      }
    });
  }
}

server.on('request', handler);

server.listen(port, function () {
  console.log('WebKit devtools agent front-end listening on http://localhost:%s', port);
});
