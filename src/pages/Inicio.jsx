import React from 'react';
import Carousel from '../components/Carousel';import Footer from '../components/Footer';
import '../styles/Inicio.css';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <Carousel />
      <div className="section section-quienes-somos">
        <h3 className="sub-titles">¿Quiénes somos?</h3>
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
          <div className="sub-text">
            <h4 className="sub-titles">Tecnología Electrónica</h4> 
            <ul className="ul-list">
              <li className="ul-list-item">Nos especializamos en la integración de sistemas inteligentes para el hogar, como dispositivos IoT, controles de iluminación, climatización y seguridad.</li>
              <li className="ul-list-item">Brindamos mantenimiento preventivo y correctivo a equipos electrónicos, asegurando su máxima durabilidad y rendimiento.</li>
              <li className="ul-list-item">Implementamos soluciones de conectividad avanzada, como redes Wi-Fi de alta velocidad, servidores y sistemas de almacenamiento en la nube para empresas.</li>
              <li className="ul-list-item">Ofrecemos capacitación técnica a nuestros clientes, facilitando un uso óptimo de sus dispositivos electrónicos.</li>
            </ul>
          </div>  
          <div className="sub-text">
            <h4 className="sub-titles">Soluciones de Empaque</h4> 
            <ul className="ul-list">
              <li className="ul-list-item">Desarrollamos soluciones innovadoras de empaque que maximizan la experiencia del cliente al interactuar con el producto.</li>
              <li className="ul-list-item">Diseñamos empaques multifuncionales que permiten su reutilización, fomentando prácticas más sostenibles.</li>
              <li className="ul-list-item">Ofrecemos una línea de empaques termoformados y laminados ideales para sectores como alimentos, farmacéutico y cosmético.</li>
              <li className="ul-list-item">Contamos con tecnología avanzada de impresión personalizada para agregar valor visual y funcional a los empaques.</li>
            </ul>
          </div>
        </div>
        <div className="carousel-container">
        </div>
      </div>
      <div className="section historia">
        <div className="text-container">
          <h4 className="sub-titles">Nuestra historia</h4>
          <p className="text">
            <b>EPAC</b> es una empresa argentina-inglesa que combina la pasión por la tecnología y la innovación con un profundo compromiso con la calidad y la sostenibilidad. Fundada en 1999 por un grupo de emprendedores visionarios, EPAC surgió con el propósito de satisfacer las crecientes demandas del mercado en dos sectores clave: la tecnología electrónica y las soluciones de empaque.
            <br/>  <br/>         
            Desde sus inicios, la empresa se destacó por su capacidad para adaptarse a los constantes cambios del mercado global, manteniendo siempre el foco en la excelencia y en la creación de valor para sus clientes. Lo que comenzó como un pequeño proyecto con grandes aspiraciones, rápidamente se consolidó como un referente en la industria, gracias a una combinación de experiencia, innovación tecnológica y un enfoque en las necesidades específicas de cada cliente.
          </p>
        </div>
        <div className="video-container">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/3JKdrQ2hfpk?si=ARPh9IwhpvNWJUsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/ZdcTVnp7lc0?si=zwmcsU-tuprgCIvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}