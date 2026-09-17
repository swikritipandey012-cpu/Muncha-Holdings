import '../styles/Footer.css';
import logo from '../assets/muncha_logo.png';

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="" className="footer-watermark" />
            <div className="footer-content">
                <div className="footer-col">
                    <img src={logo} alt="Muncha Holdings Logo" className="footer-logo" />
                    <p className="footer-location">Butwal, Lumbini Province, Nepal</p>
                    <p className="footer-location">+977 9801234567</p>
                    <p className="footer-location">shubhanjan@munchaholdings.com</p>
                </div>
                <div className="footer-col">
                    <p className="footer-heading">Links</p>
                    <div className="footer-links-row">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <div className="footer-divider"></div>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Muncha Holdings Pvt Ltd. All rights reserved.</p>
        </footer>
    );
}

export default Footer;