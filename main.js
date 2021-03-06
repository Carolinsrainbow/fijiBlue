// Ingresamos la base de los productos de la verdulería

const inventarios = [
  { nombre: "papaya", precio: 2700, stock: 5 },
  { nombre: "piña", precio: 1000, stock: 15 },
  { nombre: "kiwi", precio: 700, stock: 0 },
  { nombre: "chirimoya", precio: 3000, stock: 1 },
  { nombre: "palta", precio: 6000, stock: 12 },
];

//Buscar Stock de productos

const getStock = inventarios
  .map(function (inventario) {
    return { nombre: inventario.nombre, stock: inventario.stock };
  })
  .filter(function (inventario) {
    return inventario.stock > 0;
  });
console.log("Hay stock en ", getStock);

// Mínimo stock + Aumento de precio
const MinStock = inventarios.map((inventario) => {
  if (inventario.stock === 1) {
    return {
      ...inventario,
      precio: inventario.precio * 3,
    };
  }
  return inventario;
});
console.log(MinStock);

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
  return totalSuma;
};
console.log(totalIngreso());











