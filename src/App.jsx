import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/theme.css';
import { useState, useEffect } from 'react';

function App(){
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return(
    <div className={`app-wrapper ${isLight ? 'light-mode' : ''}`}>
      <Navbar isLight={isLight} onToggle={() => setIsLight(!isLight)}/>
      <Hero/>
      <Story/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;