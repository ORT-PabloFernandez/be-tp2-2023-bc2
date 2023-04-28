import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1> Hola mundo </h1>");
    res.end();
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("El servidor web en el puerto 3000 esta levantado");
  });
