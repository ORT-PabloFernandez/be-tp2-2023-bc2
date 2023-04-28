import axios from "axios";

const url =
  "https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json";

// axios(url)
//   .then((response) => {
//     return response.data;
//   })
//   .then((data) => {
//     console.table(data);
//   });

async function getUsers() {
  const users = await axios.get(url);
  return users;
}

getUsers();
