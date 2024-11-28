import React, { useEffect, useState } from 'react'
import '../styles/FabricantesYComponentes.css'


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
    <div className="page">
      <div className="fabricantes-section">
        <h1 className="section-title">Lista de Fabricantes</h1>
        <ul className="items-grid">
          {fabricantes.map((fabricante) => (
            <li
              key={fabricante.id}
              className="item-card"
            >
              <h2 className="item-title">{fabricante.nombre}</h2>
              <p className="item-text">{fabricante.direccion}</p>
              <p className="item-text">{fabricante.numeroContacto}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="componentes-section">
        <h1 className="section-title">Lista de Componentes</h1>
        <ul className="items-grid">
          {componentes.map((componente) => (
            <li
              key={componente.id}
              className="item-card"
            >
              <h2 className="item-title">{componente.nombre}</h2>
              <p className="item-text">{componente.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

