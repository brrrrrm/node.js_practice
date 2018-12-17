var express = require('express');
var app = express();
app.get('/', function(req, res){ //앞은 접속할 url, 뒤는 실행할 펑션
  res.send('Hello Home Page'); //이미 포함된 메소드
});
app.get('/login', function(req, res){  //라우팅
  res.send('<h1>Login Please<h1>');
})
app.listen(3000, function() {
  console.log('Connected 3000 port!');
});
