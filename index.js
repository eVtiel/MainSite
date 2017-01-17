var express = require('express');
var app = express();

// app.get('/test', function(request, response){
// 	response.render('pages/test');
// });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/flipboard', function(request, response){
  response.render('pages/flipboard');
});

app.get('/bookshelf', function(request, response){
  response.render('pages/bookshelf');
});

app.get('/gym', function(request, response){
  response.render('pages/gym');
});

app.get('/statusbox', function(request, response){
  response.render('pages/statusbox');
});

app.get('/nearme', function(request, response){
  response.render('pages/nearme');
});

app.get('/outbox', function(request, response){
  response.render('pages/outbox');
});

app.get('/mj', function(request, response){
  response.render('pages/mj');
});

app.get('/pocket', function(request, response){
  response.render('pages/pocket');
});

app.get('/is', function(request, response){
  response.render('pages/is');
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
