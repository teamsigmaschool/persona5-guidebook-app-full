import React from 'react';
import { personaIDs, personaDetails } from '../data/personaData';

function Directory() {
  return (
    <div className="directory-container">
      <h2 className="directory-title">CARD LIST</h2>
      <table className="directory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>CARD NAME</th>
            <th>TRAITS</th>
            <th>LEVEL</th>
            <th>POWER</th>
          </tr>
        </thead>
        <tbody>
          {personaIDs.map((id, index) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{personaDetails[index].name}</td>
              <td>{personaDetails[index].traits}</td>
              <td>{personaDetails[index].level}</td>
              <td>{personaDetails[index].stats.power}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directory;
