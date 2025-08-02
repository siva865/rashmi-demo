import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaYoutube, FaPhone, FaInstagram } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            Rashmi<span>Yoga</span>
          </a>
          <div className="menu-icon" onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-links" onClick={toggleNavbar}>
                <FaHome className="nav-icon" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-links" onClick={toggleNavbar}>
                <FaUser className="nav-icon" /> Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={toggleNavbar}>
                <FaUser className="nav-icon" /> About
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-links" onClick={toggleNavbar}>
                <FaYoutube className="nav-icon" /> Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={toggleNavbar}>
                <FaPhone className="nav-icon" /> Contact
              </a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;