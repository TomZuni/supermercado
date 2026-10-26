// Barra superior con el nombre del supermercado.
export default function Encabezado() {
  return (
    <header className="encabezado">
      <div className="container d-flex align-items-center gap-2">
        <i className="bi bi-basket3-fill fs-3" aria-hidden="true"></i>
        <div>
          <p className="encabezado-titulo mb-0">Supermercado Central</p>
          <small className="encabezado-sub">Gestión de inventario</small>
        </div>
      </div>
    </header>
  )
}
