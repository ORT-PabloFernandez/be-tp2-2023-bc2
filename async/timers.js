setTimeout(() => {
  console.log("PaSARON 2 segundos");
}, 2000);

setTimeout(() => {
  console.log("Pasaron 4 segundos");
}, 4000);

let i = 0;
const timerid = setInterval(() => {
  console.log(`Hola segundo ${i}`);
  i++;
  if (i > 5) {
    clearInterval(timerid);
  }
}, 1000);

console.log("Hola mundo");
