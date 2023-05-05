import express from "express";
const PORT = 3000;

const inventors = [
  { id: 1, first: "Albert", last: "Einstein", year: 1879 },
  { id: 2, first: "Isaac", last: "Newton", year: 1643 },
  { id: 3, first: "Galileo", last: "Galilei", year: 1564 },
  { id: 4, first: "Marie", last: "Curie", year: 1867 },
  { id: 5, first: "Johannes", last: "Kepler", year: 1571 },
  { id: 6, first: "Nicolaus", last: "Copernicus", year: 1473 },
  { id: 7, first: "Max", last: "Planck", year: 1858 },
];

const app = express();

app.use("/", (req, res, next) => {
  console.log("Paso primero por el middleware");
  if (req.query.token === "abc123") {
    next();
  } else {
    res.status(401).send("login fail");
  }
});

app.get("/", (req, res) => {
  res.send(
    `
    <html>
        <head></head>
        <body>
            HOME
        </body>
    </html>
    `
  );
});

app.get("/api/inventors", (req, res) => {
  res.json(inventors);
});

app.get("/api/inventors/:id", (req, res) => {
  res.json(
    inventors.find((inventor) => inventor.id === parseInt(req.params.id))
  );
});

app.listen(PORT, () => {
  console.log("Servidor express levantado en el puerto ", PORT);
});
