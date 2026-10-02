import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import Directory from './pages/Directory';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Persona 5 Card Guidebook</h1>
        <div className="nav-links">
          <AudioPlayer />
          <Link to="/">Home</Link>
          <Link to="/album">Search</Link>
          <Link to="/directory">Card List</Link>
        </div>
      </nav>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/directory" element={<Directory />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
