// Página informativa: Preguntas frecuentes (acordeón).
// El estado "abierta" guarda cuál pregunta está desplegada (o null si ninguna).
import { useState } from 'react'

const PREGUNTAS = [
  { pregunta: '¿Cómo agrego un producto al inventario?', respuesta: 'En la página de Inicio, completa el formulario "Agregar producto" con nombre, categoría, precio, stock y stock mínimo, y pulsa "Agregar".' },
  { pregunta: '¿Cómo actualizo el stock de un producto?', respuesta: 'En la tabla de inventario usa los botones − y + de cada fila para restar o sumar una unidad al stock.' },
  { pregunta: '¿Qué significa "Stock bajo"?', respuesta: 'Un producto aparece con "Stock bajo" cuando sus unidades son iguales o menores al stock mínimo definido. Si llega a cero, se marca como "Agotado".' },
  { pregunta: '¿Cómo busco un producto?', respuesta: 'Usa el buscador sobre la tabla para escribir el nombre, o el selector para filtrar por categoría.' },
  { pregunta: '¿Se pierden los datos si recargo la página?', respuesta: 'No. El inventario se guarda en tu navegador, así que los cambios se mantienen al recargar. Con "Restablecer inventario" vuelves a los datos iniciales.' },
  { pregunta: '¿Cómo elimino un producto?', respuesta: 'Pulsa el ícono de papelera en la fila del producto que quieres quitar de la lista.' },
]

export default function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState(null)

  // Si se toca la pregunta ya abierta, se cierra; si no, se abre la nueva.
  const alternar = (indice) => setAbierta(abierta === indice ? null : indice)

  return (
    <section aria-labelledby="tituloPreguntas">
      <h1 id="tituloPreguntas" className="h3">Preguntas frecuentes</h1>
      <p className="text-secondary">Resolvemos las dudas más comunes sobre el uso del inventario.</p>

      <div className="acordeon">
        {PREGUNTAS.map((item, indice) => {
          const estaAbierta = abierta === indice
          return (
            <div className="acordeon-item" key={item.pregunta}>
              <h2 className="h6 mb-0">
                <button
                  type="button"
                  className="acordeon-boton"
                  aria-expanded={estaAbierta}
                  aria-controls={`respuesta-${indice}`}
                  onClick={() => alternar(indice)}
                >
                  <span>{item.pregunta}</span>
                  <i className={`bi ${estaAbierta ? 'bi-chevron-up' : 'bi-chevron-down'}`} aria-hidden="true"></i>
                </button>
              </h2>
              {/* Renderizado condicional: la respuesta solo existe cuando está abierta */}
              {estaAbierta && (
                <div className="acordeon-respuesta" id={`respuesta-${indice}`}>{item.respuesta}</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
