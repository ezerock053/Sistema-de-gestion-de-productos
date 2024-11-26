import React from 'react';
import Carousel from '../components/Carousel';
import CarouselInicio from '../components/CarouselInicio';
import Footer from '../components/Footer';
import '../styles/Inicio.css';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <Carousel />
      <div className="section section-quienes-somos">
        <h3 className="titles centered-title">¿Quiénes somos?</h3>
        <img src="/public/image-who.webp" alt="Equipo de trabajo" className="team-image" />
        <div className="banners">
          <div className="banner">
            <h4>Innovación</h4>
            <p>Nos caracterizamos por nuestra pasión por la innovación y nuestro compromiso con la sostenibilidad.</p>
          </div>
          <div className="banner">
            <h4>Calidad</h4>
            <p>Proporcionamos tecnología electrónica de calidad y soluciones avanzadas de empaquetado.</p>
          </div>
          <div className="banner">
            <h4>Equipo</h4>
            <p>Un equipo profesional y colaborativo, siempre dispuesto a adaptarse a las necesidades del mercado.</p>
          </div>
        </div>
      </div>
      <div className="section section-que-hacemos">
        <div className="text-container">
          <p className="text">
            En EPAC, trabajamos en dos grandes áreas para ofrecer servicios integrales:
          </p>
          <h4 className="sub-titles">Tecnología Electrónica</h4> 
          <ul className="ul-list">
            <li className="ul-list-item">Comercializamos componentes electrónicos y equipos de última generación, como dispositivos móviles, electrodomésticos, equipos audiovisuales y sistemas de automatización.</li>
            <li className="ul-list-item">Proveemos soluciones tecnológicas diseñadas para el hogar, oficinas y empresas, garantizando confiabilidad y eficiencia en cada producto.</li>
            <li className="ul-list-item">Asesoramos a nuestros clientes para elegir las herramientas tecnológicas que mejor se adapten a sus necesidades.</li>
          </ul>
          <h4 className="sub-titles">Soluciones de Empaque</h4> 
          <ul className="ul-list">
            <li className="ul-list-item">Diseñamos y fabricamos empaques personalizados que refuerzan la identidad de marca de nuestros clientes.</li>
            <li className="ul-list-item">Ofrecemos empaques industriales resistentes que garantizan la protección de los productos durante el transporte y almacenamiento.</li>
            <li className="ul-list-item">Promovemos opciones de empaque ecológico, fabricadas con materiales reciclables y biodegradables, reduciendo el impacto ambiental.</li>
          </ul>
        </div>
        <div className="carousel-container">
          <CarouselInicio />
        </div>
      </div>
      <div className="section historia">
        <div className="text-container">
          <h4 className="sub-titles">Nuestra historia</h4>
          <p className="text">
            EPAC es una empresa argentina con más de 20 años de experiencia en el mercado. Fundada en 1999 por un grupo de emprendedores apasionados por la tecnología y la innovación, nos hemos consolidado como líderes en la comercialización de productos electrónicos y soluciones de empaque.
          </p>
        </div>
        <div className="video-container">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/3JKdrQ2hfpk?si=ARPh9IwhpvNWJUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}