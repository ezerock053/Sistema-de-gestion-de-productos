import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">SGP</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link active" >Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/Catalogo' className="nav-link">Catalogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/DetalleProductos' className="nav-link">Detalles Producto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/FabricantesYComponentes' className="nav-link">Fabricantes y Componentes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
