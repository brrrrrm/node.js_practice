/*http는 'http'라는 모듈을 필요로 한다. require 함수의 리턴 값을 http 상수에 저장 */
const http = require('http');
/* hostname 상수에 해당 값 할당 */
const hostname = '127.0.0.2';
/* port 상수에 해당 값 할당 */
const port = 444;

/* createServer 메소드 => http.Server 객체를 리턴하는 함수 */
http.createServer((req, res) => {  //req, res 를 전달받는 익명함수 , 내용은 아래
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {  /* 리턴된 서버 객체에 listen 메소드 붙임*/
  console.log(`Server running at http://${hostname}:${port}/`);
});
