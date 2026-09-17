import '../styles/Contact.css';
import { FiMapPin, FiPhone, FiMail, FiGlobe } from 'react-icons/fi';

function Contact(){
    return(
        <div className="contact reveal"  id="contact">
            <div className="contact-left">
                <h2>Let's Connect</h2>
                <p className="desc">Reach out to Muncha Holdings for business inquiries.</p>
            </div>
            <div className="contact-right">
                <div className="contact-item">
                    <FiMapPin className="contact-icon" />
                    <span>Butwal, Lumbini Province, Nepal</span>
                </div>
                <div className="contact-item">
                    <FiPhone className="contact-icon" />
                    <a href="tel:+9779801234567">+977 9801234567</a>
                </div>
                <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <a href="mailto:shubhanjan@munchaholdings.com">shubhanjan@munchaholdings.com</a>
                </div>
                <div className="contact-item">
                    <FiGlobe className="contact-icon" />
                    <span>www.munchaholdings.com</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;