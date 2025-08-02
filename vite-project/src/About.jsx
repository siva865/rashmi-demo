import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <div className="image-placeholder"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <h2 className="section-title">About Rashmi</h2>
          <p className="about-text">
            With over 10 years of experience in yoga instruction, Rashmi has helped hundreds of students achieve their wellness goals. She specializes in Hatha, Vinyasa, and therapeutic yoga.
          </p>
          <p className="about-text">
            Rashmi's approach combines traditional yoga techniques with modern understanding of anatomy and physiology, creating a practice that is both authentic and accessible.
          </p>
          <p className="about-text">
            Certified by the International Yoga Alliance, Rashmi continues to deepen her knowledge through regular training with master teachers from around the world.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;