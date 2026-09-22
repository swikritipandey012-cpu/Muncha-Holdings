import '../styles/Portfolio.css';
import { FiSend, FiHome, FiZap, FiDroplet, FiBox, FiSun } from 'react-icons/fi';

function Portfolio(){
    return(
        <section id='portfolio'>
        <div className="portfolio reveal" id="portfolio">
            <h2>Our Diverse Portfolio</h2>
            <div className="cards">
                <div className="card">
                    <FiSend className="icon" />
                    <h3>Aviation & Helicopter Services</h3>
                    <p>Helicopter charter and aviation services.</p>
        
                </div>
                <div className="card">
                    <FiHome className="icon" />
                    <h3>Hospitality & Hotels</h3>
                    <p>Running hotels across the region.</p>
        
                </div>
                <div className="card">
                    <FiZap className="icon" />
                    <h3>Hydropower</h3>
                    <p>Generating clean power for Nepal.</p>
                </div>
                <div className="card">
                    <FiDroplet className="icon" />
                    <h3>Distillery Operations</h3>
                    <p>Producing quality spirits.</p>
                </div>
                <div className="card">
                    <FiBox className="icon" />
                    <h3>AAC Block Manufacturing</h3>
                    <p>Making lightweight blocks for construction.</p>    
                </div>
                <div className="card">
                    <FiSun className="icon" />
                    <h3>Cattle Farming & Milk Processing</h3>
                    <p>Dairy farming and milk production.</p>
    
                </div>
            </div>
        </div>
        </section>
    );
}

export default Portfolio;