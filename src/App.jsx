import { useState } from 'react'
import Menu from './components/menu'
import { Navigate, Route, Routes } from 'react-router-dom'
import DetalleProductos from './pages/DetalleProductos'
import FabricantesYComponentes from './pages/FabricantesYComponentes'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element ={<Inicio />}></Route>
        <Route path='/catalogo' element={<Catalogo/>}></Route>
        <Route path='/detalleProductos/:id' element={<DetalleProductos/>}></Route>
        <Route path='/fabricantesYComponentes' element={<FabricantesYComponentes/>}></Route>
        <Route path='/*' element={<Navigate to= '/' />}></Route> //Cualquier cosa a inicio
      </Routes>
    </div>
  )
}

export default App