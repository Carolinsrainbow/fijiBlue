// Ingresamos la base de los productos de la verdulería

const inventarios = [
  { nombre: "papaya", precio: 2700, stock: 5 },
  { nombre: "piña", precio: 1000, stock: 15 },
  { nombre: "kiwi", precio: 700, stock: 0 },
  { nombre: "chirimoya", precio: 3000, stock: 1 },
  { nombre: "palta", precio: 6000, stock: 12 },
];

// Ingreso total de ventas
const totalIngreso = () => {
  let array = [];
  let totalSuma = 0;
  inventarios.forEach((inventario) => {
      //P*Q
    array.push(inventario.precio * inventario.stock);
  });
  array.reduce((acum, num) => {
    return (totalSuma = acum + num);
    //Le pedimos que sume los totales de cada fruta para obtener el general
  }, 0);
  return totalSuma
};
console.log(totalIngreso())