import logo from '../assets/muncha_logo.png';
import '../styles/Hero.css';

function Hero(){
    return(
        <div className="hero" id="home">
            <img src={logo} alt="" className="hero-watermark" />
            <img src={logo} alt="Muncha Holdings Logo" className="hero-logo" />
            <h1>Muncha Holdings</h1>
            <p className="tagline">Diversified businesses. One vision for growth.</p>
            <p className='desc'>A group of businesses across aviation, hospitality, energy, manufacturing, and farming.</p>
            <div className="director-line">
                <p className="director-name">Shubhanjan Krishna Shrestha</p>
                <p className="director-title">Director</p>
            </div>
            <a href='#portfolio' className='btn'>Explore Our Businesses →</a>
        </div>
    );
}
export default Hero;