const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
app.get('/', function (req,res) {
  const reply = {
    "status": "ok"
  };
  res.json(reply);
});
app.use(bodyParser.json());
const listener = app.listen(process.env.PORT || '3000', function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
