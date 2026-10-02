import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
      <h1 className="hero-title">Persona 5 Card Guidebook</h1>
      <div className="hero-subtitle">Explore Persona 5 cards and stats.</div>
      <br />
      <Link to="/album" className="hero-btn">OPEN GUIDEBOOK</Link>

      <img 
        src="/loadingscreen.gif" 
        alt="Persona 5 Loading Animation" 
        className="home-loading-gif"
      />
    </div>
  );
}

export default Home;
