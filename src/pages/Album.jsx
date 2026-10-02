import React, { useState } from 'react';
import { personaIDs, personaDetails } from '../data/personaData';
import { find } from '../utils/searcher';

function Album() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    const target = parseInt(searchTerm, 10);
    const searchResult = find(target, personaIDs, personaDetails);
    
    setResult(searchResult);
    setSearched(true);
  };

  return (
    <div className="album-container">
      <div className="search-section">
        <div className="search-section-inner">
          <h2 className="search-title-text">SEARCH CARD</h2>
          <form className="search-input-group" onSubmit={handleSearch}>
            <input 
              type="number" 
              className="search-input"
              placeholder="Enter Registry ID (e.g. 101)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-btn">EXECUTE</button>
          </form>
          {searched && !result.found && (
            <div className="error-msg">ERROR: ID NOT FOUND IN DATABASE.</div>
          )}
        </div>
      </div>

      {result && (
        <div className="log-section">
          <h3>SYSTEM LOG (BINARY SEARCH):</h3>
          {result.log.map((step, idx) => (
            <div key={idx}>> {step}</div>
          ))}
        </div>
      )}

      {result && result.found && (
        <div className="card-display" style={{ marginTop: '2rem' }}>
          <div className="card-header">
            <h3 className="card-name">{result.data.name}</h3>
            <div className="card-level">LV {result.data.level}</div>
          </div>
          
          <div className="card-image-container" style={{ textAlign: 'center', marginBottom: '1rem', border: '4px solid var(--p5-white)' }}>
            {result.data.image ? (
              <img src={result.data.image} alt={result.data.name} style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
            ) : (
              <div className="placeholder-img"></div>
            )}
          </div>
          
          <div className="card-arcana">{result.data.traits} TRAITS</div>
          
          <div className="card-stats">
            <div className="stat-row">
              <span className="stat-label">POWER</span>
              <span className="stat-value">{result.data.stats.power}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">COST</span>
              <span className="stat-value">{result.data.stats.cost}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">SOUL</span>
              <span className="stat-value">{result.data.stats.soul}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Album;
