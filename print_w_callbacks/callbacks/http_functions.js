module.exports = function getHTML (options, callback) {
    //PASS --test inside function
    var https = require('https');

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