/*global require, __dirname */
'use strict';
var express = require('express'), app = express();
  app.get('/', function(req, res) {
      res.sendFile(__dirname +'/index.html');
  });
  app.get(/^(.+)$/, function(req, res) {
  res.sendFile(__dirname +'/' + req.params[0]); 
});
// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3000);
