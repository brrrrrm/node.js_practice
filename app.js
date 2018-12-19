var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.set('view options', {pretty: true})
app.use(express.static('public'));
app.get('/topic/:id', function(req,res){
  var topics = [
    'Javascript is ...',
    'NodeJs is ... ',
    'Express is ...',
    {'color' : 'red'}
  ];
  var output = `
  <a href = "/topic?id=0">JavaScript</a><br>
  <a href = "/topic?id=1">NodeJS</a><br>
  <a href = "/topic?id=2">Express</a><br>
  <h1>${topics[req.params.id]}</h1>
  `
  res.send(output);
})
app.get('topic/:id/:mode', function(req, res){
  res.send(req.params.id + ',' + req.params.mode);
})
app.get('/template', function(req, res){
  res.render('temp', { time : Date(), _title : 'Pug'});
});
app.get('/', function(req, res){
    res.send('Hello home page');;
});
app.get('/dynamic', function(req, res){
  var lis = '';
  for (var i = 0 ; i < 5 ; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();

  var output = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset = "utf-8">
    <title></title>
    </head>
    <body>
  <h1>헬로 다이나믹!</h1>
  <ul>${lis}</ul>
  ${time}
    </body>
    </html>`;
  res.send(output);
})
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.png">')
})
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});
