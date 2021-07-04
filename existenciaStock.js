// Ingresamos la base de los productos de la verdulería
const inventarios = [
  { nombre: "papaya", precio: 2700, stock: 5 },
  { nombre: "piña", precio: 1000, stock: 15 },
  { nombre: "kiwi", precio: 700, stock: 0 },
  { nombre: "chirimoya", precio: 3000, stock: 1 },
  { nombre: "palta", precio: 6000, stock: 12 },
];
console.log(inventarios);

// Ejemplo de compra
const ordenCompra = {
  nombre: "papaya",
  cantidad: 1,
};
console.log(ordenCompra);

// Revisión de Stock
const habemusStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        inventarios.filter(
          (inventario) =>
            ordenCompra.nombre === inventario.nombre && inventario.stock > 0
        )
      );
    }, 250);
  });
};
console.log(habemusStock());

async function showStock() {
  let dataStock = await habemusStock;
  console.log(dataStock);
}
console.log(showStock);

// Ejecutar venta