import React from 'react';
  import { Link } from 'react-router-dom';
  import '../index.css'; // Import the consolidated CSS file

  export const Home = () => {
    return (
      <div className="main-container">
        <div className="content-wrapper">
          <h1 className="title">
            <span className="highlight">Un Kinalero Mas</span>
          </h1>
          <p className="subtitle">
              ¿Tienes dudas de tus tareas?, ¿Quieres hacer recibir ayuda de la comunidad kinalera?! Aqui lo puedes hacer!!!
          </p>
          <div className="features">
            {[
              "🙌 Haz preguntas, mira las preguntas por curos y mucho mas!",
              "😈 Continua y vamos a vivir esta experiencia!!!"
              
            ].map((item, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{item.split(' ')[0]}</div>
                <p className="feature-text">{item.split(' ').slice(1).join(' ')}</p>
              </div>
            ))}
          </div>
          <div className="cta-wrapper">
            <Link to="/dashboard/publications" className="cta-button">
                ¡Vamos!
            </Link>
          </div>
            <p className="footer-note">
              Diego Alexander Medina Urizar 2023045
            </p>
        </div>
      </div>
    );
  };