import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="text">
        Integrantes del grupo:<br />
        .....
      </p>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13134.067628190904!2d-58.63502421481934!3d-34.61637552726304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8da75c7af63%3A0x275fa0fbb4f66f49!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1732580335320!5m2!1ses-419!2sar" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Ubicación de la empresa"></iframe>
      </div>
    </footer>
  );
}