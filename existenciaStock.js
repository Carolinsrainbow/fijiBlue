// Ingresamos la base de los productos de la verdulería
const inventarios = [
  { nombre: "papaya", precio: 2700, stock: 5 },
  { nombre: "piña", precio: 1000, stock: 15 },
  { nombre: "kiwi", precio: 700, stock: 0 },
  { nombre: "chirimoya", precio: 3000, stock: 1 },
  { nombre: "palta", precio: 6000, stock: 12 },
];
//console.log(inventarios);

// Ejemplo de compra
const ordenCompra = {
  nombre: "palta",
  cantidad: 1,
};
//console.log(ordenCompra.nombre)

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
    console.log(
      ordenCompra.nombre === inventario.nombre && inventario.stock > 0
    );
  });
};
habemusStock();
console.log(habemusStock());

async function showStock() {
  let dataStock = await habemusStock;
  console.log(dataStock);
}
console.log(showStock);

// Ejecutar venta

const ventaEfectiva = (nombre, stock) => {
  try {
    if (habemusStock(nombre, stock)) {
      console.log(habemusStock);
    }
  } catch (error) {
    console.log(error);
  }
};
