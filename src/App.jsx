// Define las RUTAS de la aplicación con React Router.
//   /                      -> Inicio (inventario)
//   /quienes-somos         -> Quiénes somos
//   /preguntas-frecuentes  -> Preguntas frecuentes
//   cualquier otra         -> Página no encontrada
// Todas comparten el mismo Layout (encabezado + contenido + menú inferior).
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import QuienesSomos from './pages/QuienesSomos.jsx'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'
import useInventario from './hooks/useInventario.js'

export default function App() {
  // El inventario vive aquí (y no en Inicio) para no perderse al cambiar de página.
  const inventario = useInventario()

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio inventario={inventario} />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
