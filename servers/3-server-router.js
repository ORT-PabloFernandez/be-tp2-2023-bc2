import http from "http";

const inventors = [
  { id: 1, first: "Albert", last: "Einstein", year: 1879 },
  { id: 2, first: "Isaac", last: "Newton", year: 1643 },
  { id: 3, first: "Galileo", last: "Galilei", year: 1564 },
  { id: 4, first: "Marie", last: "Curie", year: 1867 },
  { id: 5, first: "Johannes", last: "Kepler", year: 1571 },
  { id: 6, first: "Nicolaus", last: "Copernicus", year: 1473 },
  { id: 7, first: "Max", last: "Planck", year: 1858 },
];

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1> Home </h1>");
        break;
      case "/api/inventors":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(inventors, null, "  "));
        break;
      case "/api/inventors/2":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(
          JSON.stringify(
            inventors.find((inven) => inven.id == 2),
            null,
            "  "
          )
        );
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`
                <html>
                    <head></head>
                    <body>
                        404 recuerso no encontrada
                    </body>
                </html>
            `);
        break;
    }
    res.end();
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Servidor en el puerto 3000 levantado");
  });
