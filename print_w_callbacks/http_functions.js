module.exports = function getHTML (options, callback) {
  /* Your code here */
    //test inside function
    var https = require('https');

    options = {
      host: requestOptions.host,
      path: requestOptions.path
    };

    https.get(options, function(response) {
      response.setEncoding('utf8');
      var html = '';

      response.on('data', function(chunk) {
        html += chunk;
        return;
      });

      response.on('end', function() {
        callback(html);
      });

    });
};

//COMMENTED OUT FUNCTION CALL FOR MODULARIZATION IN STEP 5
// function printHTML (html) {
//   console.log(html);
// }
//AND THIS ONE
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

//AND THIS ONE
//getHTML(requestOptions, printHTML);