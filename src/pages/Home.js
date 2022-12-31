import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/sunset.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >
            <h1>Cascade Health</h1>
            <p>Come Join Us</p>
            <Link to="/menu">
                <button>Subscribe now</button>
            </Link>
        </div>
    </div>
  )
};

export default Home;