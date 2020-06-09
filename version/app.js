const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 3 of the app.' + '\n' + 'Automatically triggered to a new version with webhooks';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
