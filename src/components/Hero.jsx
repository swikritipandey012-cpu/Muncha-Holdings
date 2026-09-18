import logo from '../assets/muncha_logo.png';
import '../styles/Hero.css';

function Hero(){
    return(
        <div className="hero" id="home">
            <div className='hero-content'>
                <div className='hero-text'>
                    <p className='hero-label'>
                        MUNCHA HOLDINGS PVT. LTD.
                    </p>

                    <h1>
                        Buiding Across<br/>
                    <span>Industries.</span>
                    </h1>

                    <p className='tagline'>
                        Growing with purpose.
                    </p>

                    <p className='desc'>
                        A diversified group creating and managing businesses across
                        aviations, hospitality, energy, manufacturing and agriculture.
                    </p>

                    <div className='hero-buttons'>
                        <a href='#portfolio' className='btn'>
                            Explore Our Portfolio →
                        </a>

                        <a href="#about" className="btn btn-outline">
                            About Us
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className='circle-1'></div>
                    <div className='circle-2'></div>

                    <img
                        src={logo}
                        alt="Muncha Holdings Logo"
                        className="hero-logo"
                    />

                    <div className='hero-dot dot-1'></div>
                    <div className='hero-dot dot-2'></div>

                </div>

            </div>
        </div>
    );
}
export default Hero;