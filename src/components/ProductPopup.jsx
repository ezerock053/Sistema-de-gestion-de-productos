import React from 'react';
import '../styles/ProductPopup.css';

export default function ProductPopup({ product, onClose, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>x</button>
        <img
          alt={product.nombre}
          src={`http://localhost:5173/${product.pathImg}`}
          className="popup-img"
        />
        <h3 className="popup-product-name">{product.nombre}</h3>
        <p className="popup-product-description">{product.descripcion}</p>
        <p className="popup-price">${product.precio}</p>
        <button className="popup-add-to-cart" onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
    </div>
  );
}