import '../styles/Story.css';

function Story(){
    return(
        <section id='about'>
        <div className="story reveal" id="about">
            <div className="story-intro">
                <p className="label">About Us</p>
                <h2>Muncha Holdings Pvt Ltd</h2>
                <p className="desc">Based in Butwal, Lumbini Province, Muncha Holdings brings together businesses across aviation, hospitality, energy, manufacturing, and agriculture.</p>
            </div>

            <div className="story-cards">
                <div className="story-card">
                    <p className="mini-label">Our Vision</p>
                    <p className="mini-text">To build a trusted group of businesses that create lasting value and grow with the communities around us.</p>
                </div>
                <div className="story-card">
                    <p className="mini-label">Our Mission</p>
                    <p className="mini-text">To grow each business with care, integrity, and a long-term commitment to people and progress.</p>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Story;