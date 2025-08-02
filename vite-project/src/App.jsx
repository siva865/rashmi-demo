import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Service';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;