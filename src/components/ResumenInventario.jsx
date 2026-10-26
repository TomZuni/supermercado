// Tres tarjetas con el resumen del inventario.
// Props: productos (lista completa). Los totales se calculan en cada render.
import { formatoPrecio } from '../utils.js'

export default function ResumenInventario({ productos }) {
  const unidades = productos.reduce((suma, p) => suma + p.stock, 0)
  const valor = productos.reduce((suma, p) => suma + p.stock * p.precio, 0)
  const alertas = productos.filter((p) => p.stock <= p.stockMinimo).length

  const datos = [
    { icono: 'bi-box-seam-fill', titulo: 'Productos', valor: productos.length },
    { icono: 'bi-stack', titulo: 'Unidades en stock', valor: unidades.toLocaleString('es-CL') },
    { icono: 'bi-currency-dollar', titulo: 'Valor del inventario', valor: formatoPrecio(valor) },
    { icono: 'bi-exclamation-triangle-fill', titulo: 'Con stock bajo', valor: alertas, alerta: alertas > 0 },
  ]

  return (
    <div className="row g-3 mb-4">
      {datos.map((dato) => (
        <div className="col-6 col-lg-3" key={dato.titulo}>
          <div className="tarjeta h-100 d-flex align-items-center gap-3">
            <i className={`bi ${dato.icono} fs-2 ${dato.alerta ? 'text-warning' : 'text-success'}`} aria-hidden="true"></i>
            <div>
              <div className="fs-5 fw-bold lh-1">{dato.valor}</div>
              <small className="text-secondary">{dato.titulo}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
