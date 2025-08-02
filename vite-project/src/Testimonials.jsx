import React from 'react';
import './testimonial.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Rashmi's yoga sessions transformed my life. I've never felt more balanced and strong.",
    name: "Priya Sharma",
    role: "Corporate Executive"
  },
  {
    quote: "After just 3 months with Rashmi, my chronic back pain has significantly reduced. Her therapeutic approach is amazing.",
    name: "Rahul Patel",
    role: "Software Engineer"
  },
  {
    quote: "The personalized attention I receive in Rashmi's sessions is unparalleled. She truly cares about her students' progress.",
    name: "Ananya Gupta",
    role: "University Professor"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2 className="section-title">What My Students Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="testimonial-card"
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{testimonial.quote}</p>
            <div className="testimonial-author">
              <h4 className="author-name">{testimonial.name}</h4>
              <p className="author-role">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;