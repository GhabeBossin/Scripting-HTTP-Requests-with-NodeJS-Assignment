var https = require('https');
// var myArgs = process.argv.slice(2);
// var repoOwner = process.argv.slice[3];
// var repoName = process.argv.slice[4];

//FAIL -scope test
// var options = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step2.html'
// };

//FAIL -scope test 2
// var options = {
//   host: requestOptions[0],
//   path: requestOptions
// };

//FAIL -argv test
// var requestOptions = {
//   host: repoOwner,
//   path: repoName
// };

function getAndPrintHTML (options) {
  //MOVED FROM
  // var requestOptions = {
  //   host: 'repoOwner',
  //   path: 'repoName'
  // };

  //WORKING?? ===========^^^^ ADD [options] back in as a param above to work
  options = {
    host: requestOptions.host,
    path: requestOptions.path
  };
  // for WORKING change requestOptions back to options
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

//MOVED TO HERE FOR PART 3--- WORKING
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML();