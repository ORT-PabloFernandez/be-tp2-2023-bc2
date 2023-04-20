import fs, { readFileSync } from "fs";

const path = "./inventors.json";

fs.readFile(path, "utf-8", (error, data) => {
  if (!error) {
    //console.log(data);
    let inventores = JSON.parse(data);
    inventores.push({ id: 100, first: "Pepe", last: "Perez", year: 1234 });
    fs.writeFile(path, JSON.stringify(inventores, null, " "), (error) => {
      fs.readFile(path, "utf-8", (error, data) => {
        if (!error) {
          console.log(JSON.parse(data));
          // UPDATE
        } else {
          console.log(error);
        }
      });
    });
  } else {
    console.log(error);
  }
});
