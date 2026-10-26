// Página informativa: Quiénes somos.
const VALORES = [
  { icono: 'bi-patch-check-fill', titulo: 'Calidad', texto: 'Seleccionamos productos frescos y de proveedores confiables.' },
  { icono: 'bi-cash-coin', titulo: 'Precios justos', texto: 'Trabajamos para que comprar lo esencial sea accesible para todos.' },
  { icono: 'bi-heart-fill', titulo: 'Cercanía', texto: 'Somos un supermercado de barrio: conocemos y escuchamos a nuestros clientes.' },
  { icono: 'bi-recycle', titulo: 'Compromiso', texto: 'Reducimos mermas y cuidamos el medio ambiente con un inventario ordenado.' },
]

export default function QuienesSomos() {
  return (
    <section aria-labelledby="tituloQuienes">
      <h1 id="tituloQuienes" className="h3">Quiénes somos</h1>
      <p className="lead text-secondary">
        Supermercado Central es un supermercado de barrio que busca ofrecer productos de calidad todos los días.
      </p>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="tarjeta h-100">
            <h2 className="h5"><i className="bi bi-flag-fill text-success"></i> Misión</h2>
            <p className="mb-0">
              Abastecer a las familias de nuestro sector con productos de primera necesidad, manteniendo siempre
              el stock disponible gracias a una gestión de inventario ordenada y eficiente.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tarjeta h-100">
            <h2 className="h5"><i className="bi bi-eye-fill text-success"></i> Visión</h2>
            <p className="mb-0">
              Ser el supermercado preferido del barrio, reconocido por su buena atención, sus precios justos y
              la confianza de sus clientes.
            </p>
          </div>
        </div>
      </div>

      <h2 className="h5 mb-3">Nuestros valores</h2>
      <div className="row g-3">
        {VALORES.map((valor) => (
          <div className="col-sm-6 col-lg-3" key={valor.titulo}>
            <div className="tarjeta h-100 text-center">
              <i className={`bi ${valor.icono} icono-valor`} aria-hidden="true"></i>
              <h3 className="h6 mt-2">{valor.titulo}</h3>
              <p className="small text-secondary mb-0">{valor.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
