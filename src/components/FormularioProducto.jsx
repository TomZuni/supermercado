// Formulario para agregar un producto nuevo.
// Props: onAgregar (función que recibe el producto). Valida antes de enviar.
import { useState } from 'react'
import { CATEGORIAS } from '../data/productos.js'

const VACIO = { nombre: '', categoria: CATEGORIAS[0], precio: '', stock: '', stockMinimo: '5' }

export default function FormularioProducto({ onAgregar }) {
  const [datos, setDatos] = useState(VACIO)
  const [errores, setErrores] = useState({})

  // Un solo manejador para todos los campos (usa el atributo "name" de cada input).
  const cambiar = (e) => setDatos({ ...datos, [e.target.name]: e.target.value })

  const validar = () => {
    const e = {}
    if (datos.nombre.trim().length < 3) e.nombre = 'El nombre debe tener al menos 3 caracteres.'
    if (datos.precio === '' || Number(datos.precio) <= 0) e.precio = 'Ingresa un precio mayor a 0.'
    if (datos.stock === '' || Number(datos.stock) < 0) e.stock = 'Ingresa un stock de 0 o más.'
    if (datos.stockMinimo === '' || Number(datos.stockMinimo) < 0) e.stockMinimo = 'Ingresa un mínimo de 0 o más.'
    return e
  }

  const enviar = (evento) => {
    evento.preventDefault()
    const nuevosErrores = validar()
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) return

    onAgregar({
      nombre: datos.nombre.trim(),
      categoria: datos.categoria,
      precio: Number(datos.precio),
      stock: Math.floor(Number(datos.stock)),
      stockMinimo: Math.floor(Number(datos.stockMinimo)),
    })
    setDatos(VACIO)
  }

  const clase = (campo) => `form-control ${errores[campo] ? 'is-invalid' : ''}`

  return (
    <form onSubmit={enviar} noValidate className="tarjeta">
      <h2 className="h5 mb-3">Agregar producto</h2>

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input id="nombre" name="nombre" className={clase('nombre')} value={datos.nombre} onChange={cambiar} placeholder="Ej: Harina (1 kg)" />
        <div className="invalid-feedback">{errores.nombre}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="categoria" className="form-label">Categoría</label>
        <select id="categoria" name="categoria" className="form-select" value={datos.categoria} onChange={cambiar}>
          {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12 col-sm-4">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input id="precio" name="precio" type="number" min="1" className={clase('precio')} value={datos.precio} onChange={cambiar} />
          <div className="invalid-feedback">{errores.precio}</div>
        </div>
        <div className="col-6 col-sm-4">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input id="stock" name="stock" type="number" min="0" className={clase('stock')} value={datos.stock} onChange={cambiar} />
          <div className="invalid-feedback">{errores.stock}</div>
        </div>
        <div className="col-6 col-sm-4">
          <label htmlFor="stockMinimo" className="form-label">Mínimo</label>
          <input id="stockMinimo" name="stockMinimo" type="number" min="0" className={clase('stockMinimo')} value={datos.stockMinimo} onChange={cambiar} />
          <div className="invalid-feedback">{errores.stockMinimo}</div>
        </div>
      </div>

      <button type="submit" className="btn btn-success w-100"><i className="bi bi-plus-circle" aria-hidden="true"></i> Agregar</button>
    </form>
  )
}
