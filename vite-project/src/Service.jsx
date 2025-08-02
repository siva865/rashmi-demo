import React from 'react';
import './service.css';
import {  FaHeartbeat, FaMedal, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { GrYoga } from "react-icons/gr";

const services = [
  {
    icon: <GrYoga />,
    title: 'Personal Yoga Sessions',
    description: 'One-on-one yoga sessions tailored to your specific needs and goals.'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Therapeutic Yoga',
    description: 'Specialized yoga for injury recovery, chronic pain, and health conditions.'
  },
  {
    icon: <FaMedal />,
    title: 'Advanced Yoga',
    description: 'For experienced practitioners looking to deepen their practice.'
  },
  {
    icon: <FaClock />,
    title: 'Corporate Yoga',
    description: 'On-site yoga sessions for businesses to improve employee wellbeing.'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">My Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="service-card"
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;