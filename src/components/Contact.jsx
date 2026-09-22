import "../styles/Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <p className="section-label">CONTACT US</p>

            <h2>Let's start a conversation.</h2>

            <form className="contact-form">
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                </div>

                <select required defaultValue="">
                    <option value="" disabled>
                        Select Inquiry Type
                    </option>

                    <option value="general">
                        General Corporate Inquiry
                    </option>

                    <option value="energy">
                        Energy & Infrastructure Partnerships
                    </option>

                    <option value="supply">
                        Supply Chain & B2B Purchasing
                    </option>

                    <option value="career">
                        Career & Job Openings
                    </option>
                </select>

                <textarea
                    placeholder="Your Message"
                    rows="6"
                    required
                ></textarea>

                <button type="submit">
                    Send Inquiry →
                </button>
            </form>
        </section>
    );
}

export default Contact;