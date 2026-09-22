import '../styles/Contact.css';

function Contact(){
    return(
        <div className="contact reveal" id="contact">
            <div className="contact-left">
                <h2>Let's Connect</h2>
                <p className="desc">Reach out to Muncha Holdings for business inquiries.</p>
            </div>
            <div className="contact-right">
                <a href="mailto:shubhanjan@munchaholdings.com" className="contact-cta">Send an Email →</a>
            </div>
        </div>
    );
}

export default Contact;