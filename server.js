'use strict'

const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));
app.get('/index.html', function(request, response){
  response.sendFile('./public/index.html', {root:'.'});
});
app.listen(PORT, function() {
  console.log('We are on port: 5000');
});

app.get('/github/*', proxyGitHub);

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
