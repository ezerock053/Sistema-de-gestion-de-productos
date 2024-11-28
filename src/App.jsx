import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import DetalleProductos from './pages/DetalleProductos';
import FabricantesYComponentes from './pages/FabricantesYComponentes';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Menu cartItems={cartItems} onAddToCart={handleAddToCart} onCheckout={handleCheckout} />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Catalogo' element={<Catalogo onAddToCart={handleAddToCart} />} />
        <Route path='/detalleProductos/:id' element={<DetalleProductos />} />
        <Route path='/fabricantesYComponentes' element={<FabricantesYComponentes />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;