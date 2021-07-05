// Ingresamos la base de los productos de la verdulería

const inventarios = [
  { nombre: "papaya", precio: 2700, stock: 5 },
  { nombre: "piña", precio: 1000, stock: 15 },
  { nombre: "kiwi", precio: 700, stock: 0 },
  { nombre: "chirimoya", precio: 3000, stock: 1 },
  { nombre: "palta", precio: 6000, stock: 12 },
];

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