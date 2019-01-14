var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var body = '';

    response.on('data', function(chunk) {
      body += chunk;
      return;
    });

    response.on('end', function(){
      console.log(body);
    })
  });
}
getAndPrintHTML();