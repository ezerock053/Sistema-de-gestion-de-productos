import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

export default function Menu({ cartItems, onAddToCart, onCheckout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const toggleCartMenu = () => {
    setCartMenuOpen(!cartMenuOpen);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/">
          <img src="../../public/icons/logo.png" alt="EPAC" />
        </NavLink>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <NavLink className="nav-link" to="/Catalogo" activeClassName="active">
            Catalogo
          </NavLink>
          <NavLink className="nav-link" to="/detalleProductos/:id" activeClassName="active">
            Detalle de Productos
          </NavLink>
          <NavLink className="nav-link" to="/fabricantesYComponentes" activeClassName="active">
            Fabricantes y Componentes
          </NavLink>
        </div>
        <div className="navbar-profile">
          <img src="../../public/icons/profile.jpg" alt="Profile" onClick={toggleProfileMenu} />
          <div className={`profile-menu ${profileMenuOpen ? 'show' : ''}`}>
            <NavLink to="/mi-cuenta">Mi cuenta</NavLink>
            <NavLink to="/configuracion">Configuración</NavLink>
          </div>
          <div className="navbar-cart" onClick={toggleCartMenu}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xml:space="preserve"
              className="cart-icon"
            >
              <circle style={{ fill: '#ffffff', stroke: '#ffffff', strokeWidth: 0.2, strokeMiterlimit: 10 }} cx="22" cy="24" r="2" />
              <circle style={{ fill: '#ffffff', stroke: '#ffffff', strokeWidth: 0.2, strokeMiterlimit: 10 }} cx="13" cy="24" r="2" />
              <path style={{ fill: '#ffffff', stroke: '#ffffff', strokeWidth: 0.2, strokeMiterlimit: 10 }} d="M10.998,10l0.497,2h13.65l-1.909,7H11.781L9.159,8.515C8.937,7.625,8.137,7,7.219,7H5C4.448,7,4,7.448,4,8 c0,0.552,0.448,1,1,1h2.219l2.621,10.485c0.223,0.89,1.023,1.515,1.94,1.515h11.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10 H10.998z" />
            </svg>
            <div className={`cart-menu ${cartMenuOpen ? 'show' : ''}`}>
              <div className="cart-items">
                {cartItems.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <span>{item.nombre}</span>
                    <span>${item.precio}</span>
                  </div>
                ))}
              </div>
              <div className="checkout">
                <span>Total: ${totalPrice.toFixed(2)}</span>
                <button onClick={onCheckout}>Terminar compra</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}