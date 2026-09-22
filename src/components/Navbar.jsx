import logo from '../assets/muncha_logo.png';
import '../styles/Navbar.css';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';

function Navbar({ isLight, onToggle }) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <nav
            className={`navbar ${isLight ? 'light' : ''} ${
                scrolled ? 'scrolled' : ''
            }`}
        >

            {/* Logo */}
            <a href="#home" className="navbar-logo">
                <img
                    src={logo}
                    alt="Muncha Holdings"
                />
            </a>


            {/* Navigation */}
            <div className="nav-links">

                <a href="#home">Home</a>

                <a href="#about">About Us</a>

                <a href="#portfolio">Portfolio</a>

                <a href="#approach">Approach</a>

                <a href="#contact">Contact</a>

            </div>


            {/* Theme Toggle */}
            <button
                type="button"
                onClick={onToggle}
                aria-label={
                    isLight
                        ? "Switch to dark mode"
                        : "Switch to light mode"
                }
            >
                {isLight ? <FiMoon /> : <FiSun />}
            </button>

        </nav>
    );
}

export default Navbar;