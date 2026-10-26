// Funciones de ayuda reutilizables.

// 1490 -> "$1.490"
export const formatoPrecio = (numero) => `$${Number(numero).toLocaleString('es-CL')}`

// Devuelve el estado de un producto según su stock.
export function estadoStock(producto) {
  if (producto.stock === 0) return { texto: 'Agotado', clase: 'text-bg-danger' }
  if (producto.stock <= producto.stockMinimo) return { texto: 'Stock bajo', clase: 'text-bg-warning' }
  return { texto: 'Disponible', clase: 'text-bg-success' }
}
