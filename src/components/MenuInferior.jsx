// Menú de navegación INFERIOR (queda fijo abajo de la pantalla).
// Usa NavLink de React Router: cambia de página sin recargar y marca
// automáticamente el enlace de la página actual con la clase "activo".
import { NavLink } from 'react-router-dom'

const OPCIONES = [
  { ruta: '/', texto: 'Inicio', icono: 'bi-house-door-fill', exacta: true },
  { ruta: '/quienes-somos', texto: 'Quiénes somos', icono: 'bi-people-fill' },
  { ruta: '/preguntas-frecuentes', texto: 'Preguntas', icono: 'bi-question-circle-fill' },
]

export default function MenuInferior() {
  return (
    <nav className="menu-inferior" aria-label="Navegación principal">
      <ul className="menu-lista">
        {OPCIONES.map((opcion) => (
          <li key={opcion.ruta}>
            <NavLink
              to={opcion.ruta}
              end={opcion.exacta} // "/" solo se marca activo cuando la ruta es exactamente "/"
              className={({ isActive }) => `menu-item ${isActive ? 'activo' : ''}`}
            >
              <i className={`bi ${opcion.icono}`} aria-hidden="true"></i>
              <span>{opcion.texto}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
