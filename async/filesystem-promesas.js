import fs from "fs/promises";

const path = "./inventors.json";
fs.readFile(path, "utf-8")
  .then((data) => {
    const inventors = JSON.parse(data);
    inventors.push({ First: "Pablo", Last: "Fernandez", year: 1976 });
    return fs.writeFile(path, JSON.stringify(inventors, null, " "));
  })
  .then((result) => {
    console.log("Inventor insertado");
  })
  .catch((error) => {
    console.log("Ocurrio un error: " + error.message);
  });
