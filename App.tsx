import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header scrolled={scrolled} />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
