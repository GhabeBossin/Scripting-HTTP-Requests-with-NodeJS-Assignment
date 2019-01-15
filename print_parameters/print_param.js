var https = require('https');

function getAndPrintHTML (options) {

  //WORKING
  var options = {
    host: requestOptions.host,
    path: requestOptions.path
  };
  //WORKING
  https.get(options, function(response) {
    response.setEncoding('utf8');
    var body = '';

    response.on('data', function(chunk) {
      body += chunk;
      return;
    });

    response.on('end', function() {
      console.log(body);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);