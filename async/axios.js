import axios from "axios";

const url =
  "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json";

axios(url).then((data) => {
  console.log(data);
});

console.log("Termino?");
