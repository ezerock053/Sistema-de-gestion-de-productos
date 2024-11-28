import React from 'react';
import '../styles/Carousel.css';

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a target="_blank" href="https://www.youtube.com/watch?v=G5u3kk0ISlA"><img src="/public/image-empresa.jpg" className="d-block w-100" alt="Tecnología Electrónica" /></a>
        </div>
        <div className="carousel-item">
          <a target="_blank" href="https://www.youtube.com/watch?v=Pt6D2N4BjOM"><img src="/public/image-empresa-meeting.jpg" className="d-block w-100" alt="Soluciones de Empaque" /></a>
        </div>
        <div className="carousel-item">
          <a target="_blank" href="https://www.youtube.com/watch?v=JcuNpGoxH1w"><img src="/public/image-empresa-speach.webp" className="d-block w-100" alt="Innovación y Sostenibilidad" /></a>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}