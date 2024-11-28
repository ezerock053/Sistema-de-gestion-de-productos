import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
              fill="currentColor" />
          </svg>
          <span>ePac Enterprise</span>
        </div>
        <aside>
          <p>Av. Gdor. Vergara 2222, Villa Tesei</p>
          <p>+54 9 11-1213-1415</p>
        </aside>
        <nav>
          <a href="#"><b>E</b>zequiel Escobar</a>
          <a href="#"><b>P</b>atricio Peralta</a>
          <a href="#"><b>A</b>ndrés Martinez</a>
          <a href="#"><b>C</b>ristian Luna</a>
        </nav>
      </div>
      <div className="footer-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13134.045274032009!2d-58.6344234!3d-34.6165168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8da75c7af63%3A0x275fa0fbb4f66f49!2sUniversidad%20Nacional%20de%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1732668831619!5m2!1ses-419!2sar"
          width="300" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </footer>
  );
}