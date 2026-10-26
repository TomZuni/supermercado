// Se muestra cuando la ruta no existe (ruta comodín "*").
import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section className="text-center py-5">
      <i className="bi bi-exclamation-triangle-fill display-3 text-warning" aria-hidden="true"></i>
      <h1 className="h3 mt-3">Página no encontrada</h1>
      <p className="text-secondary">La dirección que buscas no existe.</p>
      <Link to="/" className="btn btn-success">Volver al inicio</Link>
    </section>
  )
}
