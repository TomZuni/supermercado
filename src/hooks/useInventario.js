// Hook personalizado: concentra el ESTADO del inventario y las acciones para modificarlo.
// Se usa en App.jsx para que los datos no se pierdan al cambiar de página con el router
// (al navegar, el componente de cada página se desmonta, pero App sigue vivo).
import { useState, useEffect } from 'react'
import { PRODUCTOS_INICIALES } from '../data/productos.js'

const CLAVE = 'supermercado-inventario'

// Lee el inventario guardado en el navegador (o usa los datos iniciales).
function leerGuardado() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE))
    if (Array.isArray(guardado)) return guardado
  } catch {
    /* si el almacenamiento falla, se usan los datos iniciales */
  }
  return PRODUCTOS_INICIALES
}

export default function useInventario() {
  const [productos, setProductos] = useState(leerGuardado)

  // Cada vez que cambia la lista, se guarda en el navegador.
  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(productos))
    } catch {
      /* ignorar */
    }
  }, [productos])

  const agregar = (nuevo) => {
    const id = productos.reduce((mayor, p) => Math.max(mayor, p.id), 0) + 1
    setProductos([...productos, { ...nuevo, id }])
  }

  const eliminar = (id) => setProductos(productos.filter((p) => p.id !== id))

  // delta = +1 (sumar) o -1 (restar). El stock nunca baja de 0.
  const cambiarStock = (id, delta) =>
    setProductos(productos.map((p) => (p.id === id ? { ...p, stock: Math.max(0, p.stock + delta) } : p)))

  const restablecer = () => setProductos(PRODUCTOS_INICIALES)

  return { productos, agregar, eliminar, cambiarStock, restablecer }
}
