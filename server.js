var http = require('http')
  , server = http.createServer()
  , dish = require('dish');

var format = require('url').format
  , parse = require('url').parse
  , exists = require('fs').exists
  , resolve = require('path').resolve;

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
  exists(plate, function (found) {
    if (found) {
      dish.file(plate)(req, res);
    }
    else {
      res.writeHead(404);
      res.end;
    }
  });
}

server.on('request', handler);

server.listen(9090, function () {
  console.log('WebKit devtools agent listening on http://localhost:9090');
});
