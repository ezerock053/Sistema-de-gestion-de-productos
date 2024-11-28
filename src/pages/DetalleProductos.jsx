import React, { useEffect, useState } from 'react'
import '../styles/DetalleProductos.css'
import { Link } from 'react-router-dom'
import { fetchComponentesByProducto, fetchFabricantesByProducto } from '../data'

export default function DetalleProductos() {
  const [productos, setProductos] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [componentes, setComponentes] = useState([])
  const [fabricantes, setFabricantes] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  const obtenerProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/productos/')
      const datos = await response.json()
      setProductos(datos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerProductos()
  }, [])

  const handleProductSelect = async (producto) => {
    setSelectedProduct(producto)
    setIsExpanded(true)
    try {
      const componentesData = await fetchComponentesByProducto(producto.id)
      const fabricantesData = await fetchFabricantesByProducto(producto.id)
      setComponentes(componentesData.length > 0 ? componentesData : [{ id: 'not-found', nombre: 'Componente no encontrado', descripcion: '' }])
      setFabricantes(fabricantesData.length > 0 ? fabricantesData : [{ id: 'not-found', nombre: 'Fabricante no encontrado', direccion: '' }])
    } catch (error) {
      console.error("Error al cargar detalles:", error)
    }
  }

  return (
    <div className={`product-detail ${isExpanded ? 'expanded' : ''}`}>
      <aside className="product-list-sidebar">
        <h2 className='product-title'>Productos</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <button 
                onClick={() => handleProductSelect(producto)}
                className={selectedProduct?.id === producto.id ? 'active' : ''}
              >
                {producto.nombre}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {selectedProduct && (
        <main className="product-detail-content">
          <section className="product-main-info">
            <h1>{selectedProduct.nombre}</h1>
            <img
              src={`http://localhost:5173/${selectedProduct.pathImg}`}
              alt={selectedProduct.nombre}
            />
            <p className="price">Precio: ${selectedProduct.precio}</p>
          </section>

          <section className="product-description">
            <h2>Descripción</h2>
            <p>{selectedProduct.descripcion}</p>
          </section>

          <section className="product-components">
            <h2>Componentes</h2>
            <ul>
              {componentes.map((componente) => (
                <li key={componente.id}>
                  {componente.id !== 'not-found' ? (
                    <Link to={`/componente/${componente.id}`}>
                      {componente.nombre}
                    </Link>
                  ) : (
                    <span>{componente.nombre}</span>
                  )}
                  <p>{componente.descripcion}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="product-manufacturers">
            <h2>Fabricantes</h2>
            <ul>
              {fabricantes.map((fabricante) => (
                <li key={fabricante.id}>
                  {fabricante.id !== 'not-found' ? (
                    <Link to={`/fabricante/${fabricante.id}`}>
                      {fabricante.nombre}
                    </Link>
                  ) : (
                    <span>{fabricante.nombre}</span>
                  )}
                  <p>{fabricante.direccion}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      )}
    </div>
  )
}

