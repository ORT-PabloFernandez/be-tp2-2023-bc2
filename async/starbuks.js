const pedido1 = { tipo: "Late", cliente: "Juan" };
const pedido2 = { tipo: "Té", cliente: "Lucia" };

function mostradorStarbucks(pedido, callbackCliente) {
  switch (pedido.tipo) {
    case "Late":
      setTimeout(() => {
        callbackCliente(pedido.cliente);
      }, 4000);
      break;
    case "Té":
      setTimeout(() => {
        callbackCliente(pedido.cliente);
      }, 2000);
      break;

    default:
      break;
  }
}

mostradorStarbucks(pedido1, (cliente) => {
  console.log(`Pedido terminado llamar a ${cliente}`);
});

mostradorStarbucks(pedido2, (cliente) => {
  console.log(`Pedido terminado llamar a ${cliente}`);
});
