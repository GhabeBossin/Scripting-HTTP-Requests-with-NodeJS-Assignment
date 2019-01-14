var https = require('https');
var myArgs = process.argv.slice(2);
var repOwner = process.argv.slice[3];
var repoName = process.argv.slice[4];

function getAndPrintHTML () {

  var requestOptions = {
    host: '',
    path: ''
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