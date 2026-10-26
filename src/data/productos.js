// Datos iniciales del inventario del supermercado.
// Cada producto tiene: id, nombre, categoría, precio (CLP), stock actual y stock mínimo.
// Cuando el stock es igual o menor al mínimo, la aplicación avisa "Stock bajo".

export const CATEGORIAS = ['Abarrotes', 'Lácteos', 'Frutas y verduras', 'Bebidas', 'Aseo']

export const PRODUCTOS_INICIALES = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', categoria: 'Abarrotes', precio: 1490, stock: 48, stockMinimo: 15 },
  { id: 2, nombre: 'Fideos spaghetti (400 g)', categoria: 'Abarrotes', precio: 990, stock: 12, stockMinimo: 20 },
  { id: 3, nombre: 'Aceite vegetal (1 L)', categoria: 'Abarrotes', precio: 2790, stock: 30, stockMinimo: 10 },
  { id: 4, nombre: 'Leche entera (1 L)', categoria: 'Lácteos', precio: 1190, stock: 6, stockMinimo: 12 },
  { id: 5, nombre: 'Yogurt natural (150 g)', categoria: 'Lácteos', precio: 450, stock: 0, stockMinimo: 10 },
  { id: 6, nombre: 'Manzana roja (kg)', categoria: 'Frutas y verduras', precio: 1790, stock: 25, stockMinimo: 8 },
  { id: 7, nombre: 'Bebida cola (2 L)', categoria: 'Bebidas', precio: 2190, stock: 40, stockMinimo: 12 },
  { id: 8, nombre: 'Detergente líquido (3 L)', categoria: 'Aseo', precio: 6990, stock: 9, stockMinimo: 5 },
]
