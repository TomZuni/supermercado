# Supermercado Central – Gestión de inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con **React** y **React Router**. Tiene una página principal (home) con el inventario y un **menú inferior** que permite navegar a otras dos páginas sin recargar el sitio.

## Páginas y rutas

| Ruta | Página | Contenido |
|---|---|---|
| `/` | **Inicio** | Inventario: resumen, tabla con búsqueda y filtro, ajuste de stock, eliminar y formulario para agregar productos. |
| `/quienes-somos` | **Quiénes somos** | Misión, visión y valores del supermercado. |
| `/preguntas-frecuentes` | **Preguntas frecuentes** | Acordeón con preguntas sobre el uso del inventario. |
| cualquier otra | **Página no encontrada** | Mensaje de error con enlace para volver al inicio. |


## Estructura del proyecto

```
.
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  Punto de entrada y HashRouter
    ├── App.jsx                   Rutas
    ├── utils.js                  Formato de precio y estado del stock
    ├── data/productos.js         Datos iniciales del inventario
    ├── hooks/useInventario.js    Estado del inventario (useState + useEffect)
    ├── components/
    │   ├── Layout.jsx            Estructura común con <Outlet />
    │   ├── Encabezado.jsx        Barra superior
    │   ├── MenuInferior.jsx      Menú inferior con NavLink
    │   ├── ResumenInventario.jsx Tarjetas de resumen
    │   ├── TablaInventario.jsx   Tabla de productos
    │   └── FormularioProducto.jsx Formulario para agregar
    ├── pages/
    │   ├── Inicio.jsx
    │   ├── QuienesSomos.jsx
    │   ├── PreguntasFrecuentes.jsx
    │   └── NoEncontrada.jsx
    └── styles/app.css            Estilos propios sobre Bootstrap
```

## Funcionalidades del inventario

- **Resumen:** cantidad de productos, unidades en stock, valor total y productos con stock bajo.
- **Búsqueda y filtro** por nombre y por categoría.
- **Stock:** botones − y + en cada producto (el stock nunca baja de 0).
- **Estados:** *Disponible*, *Stock bajo* (igual o menor al mínimo) y *Agotado* (0 unidades).
- **Agregar** productos con validación de campos y **eliminar** productos.
- Los cambios se guardan en el navegador (no se pierden al recargar ni al cambiar de página). **Restablecer inventario** vuelve a los datos iniciales.

## Instalación y uso

Requiere [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install        # instala las dependencias
npm run dev        # modo desarrollo en http://localhost:5173
npm run build      # genera la carpeta dist para producción
npm run preview    # prueba la versión de producción
```


## Tecnologías

React 19 · React Router 7 · Vite · Bootstrap 5.3 · Bootstrap Icons · JavaScript (ES6)
