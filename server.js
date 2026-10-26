const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mon!\n");
});

server.listen(3000, () => {
  console.log("Servidor executant-se a http://localhost:3000/");
});
