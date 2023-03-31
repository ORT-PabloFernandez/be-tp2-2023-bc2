const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

// 1. Imprimir los inventores en formato tabla

function printInventors(inventors) {
  console.log("Nombre      Apellido     Año");
  console.log("--------------------------------");
  inventors.forEach(function (inventor) {
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      }`
    );
  });
}

// 2. Un listado de inventores nacidos antes del 1800 y que su apellido empiece con la letra C
printInventors(
  inventors
    .filter((inventor) => inventor.year <= 1800)
    .filter((inventor) => inventor.last.startsWith("C"))
);

// 3.- Convertir el apellido todo en mayuscula
printInventors(
  inventors.map((inventor) => ({
    first: inventor.first,
    last: inventor.last.toUpperCase(),
    year: inventor.year,
  }))
);
