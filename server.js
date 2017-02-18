'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));
app.get('/index.html', function(request, response){
  response.sendFile('./public/index.html', {root:'.'});
});
app.listen(PORT, function() {
  console.log('We are on port: 5000');
});
