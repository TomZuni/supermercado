// Estructura común de todas las páginas.
// <Outlet /> es el lugar donde React Router dibuja la página de la ruta actual.
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Encabezado from './Encabezado.jsx'
import MenuInferior from './MenuInferior.jsx'

// Título de la pestaña del navegador según la ruta
const TITULOS = {
  '/': 'Inventario',
  '/quienes-somos': 'Quiénes somos',
  '/preguntas-frecuentes': 'Preguntas frecuentes',
}

export default function Layout() {
  const { pathname } = useLocation() // ruta actual, por ejemplo "/quienes-somos"

  // Cada vez que cambia la ruta: se sube al inicio de la página y se actualiza el título.
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${TITULOS[pathname] ?? 'Página no encontrada'} | Supermercado Central`
  }, [pathname])

  return (
    <>
      <Encabezado />
      <main className="contenedor-principal container py-4">
        <Outlet />
      </main>
      <MenuInferior />
    </>
  )
}
