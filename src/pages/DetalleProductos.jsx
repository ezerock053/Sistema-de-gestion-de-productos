import React, { useEffect, useState } from 'react'


export default function DetalleProductos() {
  const [productos, setProductos] = useState([])
 
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

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold mb-6">Lista de Productos</h1>
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {productos.map((producto) => (
        <li
          key={producto.id}
          className="border p-4 rounded-lg shadow-md bg-white"
        >
          <img
            src={`http://localhost:5173/${producto.pathImg}`}
            alt={producto.nombre}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-bold">{producto.nombre}</h2>
          <p className="text-gray-600">{producto.descripcion}</p>
        </li>
      ))}
    </ul>
  </div>
  );
}

