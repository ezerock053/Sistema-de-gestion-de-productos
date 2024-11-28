import React, { useEffect, useState } from 'react';
import '../styles/Catalogo.css';
import { fetchProductos } from '../data';
import ProductPopup from '../components/ProductPopup';

export default function Catalogo({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const productsData = await fetchProductos();
      setProducts(productsData);
    }
    getProducts();
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="catalog-container">
      <div className="catalog-inner">
        <h2 className="catalog-title">Catalogo de Productos</h2>

        <div className="catalog-grid">
          {products.map((product) => (
            <div key={product.id} className="catalog-card" onClick={() => handleCardClick(product)}>
              <div className="catalog-card-img-container">
                <img
                  alt={product.nombre}
                  src={`http://localhost:5173/${product.pathImg}`}
                  className="catalog-card-img"
                />
              </div>
              <div className="catalog-card-info">
                <div>
                  <h3>
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.nombre}
                    </a>
                  </h3>
                  <p className='catalog-text-act'>Envío gratis</p>
                  <p>en 3 cuotas de ${(product.precio/3).toFixed(2)}</p>
                </div>
                <p className="catalog-card-price">${product.precio}</p>
              </div>
              <img src="../../public/icons/plus.svg" alt="" className="catalog-card-button" />
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleClosePopup} onAddToCart={onAddToCart} />
      )}
    </div>
  );
}