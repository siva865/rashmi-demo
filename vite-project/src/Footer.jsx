import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Rashmi<span>Yoga</span></h3>
          <p className="footer-about">
            Personalized yoga instruction to help you achieve balance, strength, and peace in your life.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#">Personal Yoga</a></li>
            <li><a href="#">Therapeutic Yoga</a></li>
            <li><a href="#">Advanced Yoga</a></li>
            <li><a href="#">Corporate Yoga</a></li>
            <li><a href="#">Online Classes</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-contact">
            <li>Bangalore, India</li>
            <li>rashmi@yogawithrashmi.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rashmi Yoga. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;