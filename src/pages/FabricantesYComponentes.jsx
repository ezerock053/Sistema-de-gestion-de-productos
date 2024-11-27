import React, { useEffect, useState } from 'react'


export default function FabricantesYComponentes() {
  const [fabricantes, setFabricantes] = useState([])
  const [componentes, setComponentes] = useState([])

  const obtenerFabricantes = async () => {
    try {
      const response = await fetch('http://localhost:5000/fabricantes/')
      const datos = await response.json()
      setFabricantes(datos)
    } catch (error) {
      console.log(error)
    }
  }

  const obtenerComponentes = async () => {
    try {
      const response = await fetch('http://localhost:5000/componentes/')
      const datos = await response.json()
      setComponentes(datos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerFabricantes()
    obtenerComponentes()
  }, [])

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Lista de Fabricantes</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fabricantes.map((fabricante) => (
            <li
              key={fabricante.id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <h2 className="text-lg font-bold">{fabricante.nombre}</h2>
              <p className="text-gray-600">{fabricante.direccion}</p>
              <p className="text-gray-600">{fabricante.numeroContacto}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Lista de Componentes</h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {componentes.map((componente) => (
            <li
              key={componente.id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <h2 className="text-lg font-bold">{componente.nombre}</h2>
              <p className="text-gray-600">{componente.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
  </div>
  );
}

