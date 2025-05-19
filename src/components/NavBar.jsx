import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import the consolidated CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="navbar-toggle"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div
          className={`navbar-menu ${isOpen ? 'active' : ''}`}
          id="navbar-default"
        >
          <ul className="navbar-menu-list">
            <li>
              <Link
                to="/"
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;