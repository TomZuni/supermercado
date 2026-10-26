// Tabla con los productos. No guarda datos propios: todo llega por props.
// Props: productos (ya filtrados), onCambiarStock(id, delta) y onEliminar(id).
import { formatoPrecio, estadoStock } from '../utils.js'

export default function TablaInventario({ productos, onCambiarStock, onEliminar }) {
  // Renderizado condicional: mensaje cuando no hay productos que mostrar
  if (productos.length === 0) {
    return <div className="alert alert-warning mb-0">No hay productos que coincidan con la búsqueda.</div>
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle mb-0">
        <thead>
          <tr>
            <th>Producto</th>
            <th className="d-none d-md-table-cell">Categoría</th>
            <th className="text-end">Precio</th>
            <th className="text-center">Stock</th>
            <th className="d-none d-md-table-cell">Estado</th>
            <th className="text-end"><span className="d-none d-md-inline">Eliminar</span></th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            const estado = estadoStock(producto)
            return (
              <tr key={producto.id}>
                <td className="fw-semibold">
                  {producto.nombre}
                  {/* En pantallas pequeñas el estado se muestra bajo el nombre, para que la tabla quepa */}
                  <div className="d-md-none mt-1"><span className={`badge ${estado.clase}`}>{estado.texto}</span></div>
                </td>
                <td className="d-none d-md-table-cell">{producto.categoria}</td>
                <td className="text-end">{formatoPrecio(producto.precio)}</td>
                <td className="text-center">
                  <div className="btn-group btn-group-sm" role="group" aria-label={`Stock de ${producto.nombre}`}>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => onCambiarStock(producto.id, -1)} aria-label={`Restar una unidad de ${producto.nombre}`}>−</button>
                    <span className="btn btn-light disabled px-3 fw-bold">{producto.stock}</span>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => onCambiarStock(producto.id, 1)} aria-label={`Sumar una unidad de ${producto.nombre}`}>+</button>
                  </div>
                </td>
                <td className="d-none d-md-table-cell"><span className={`badge ${estado.clase}`}>{estado.texto}</span></td>
                <td className="text-end">
                  <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => onEliminar(producto.id)} aria-label={`Eliminar ${producto.nombre}`}>
                    <i className="bi bi-trash3" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
