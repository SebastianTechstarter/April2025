import React from 'react'

const animals = [
    {name: 'Wanda', age: 3, type: 'Hund', breed: 'Labrador', illness: 'Zahnschmerzen'},
    {name: 'Cosmo', age: 8, type: 'Hund', breed: 'Mix', illness: 'Krebs'},
    {name: 'Moritz', age: 12, type: 'Katze', breed: 'Hauskatze', illness: 'Nierenversagen'},
    {name: 'Tjapka', age: 9, type: 'Hund', breed: 'Dackel', illness: 'Wirbelbruch'}
];

function AnimalCard({name, age, type, breed, illness}) {
  return (
    <div>
        <h3>Aktuell sind bei uns in Behandlung:</h3>
        <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>Name</th>
          <th style={cellStyle}>Alter</th>
          <th style={cellStyle}>Art</th>
          <th style={cellStyle}>Rasse</th>
          <th style={cellStyle}>Krankheit</th>
        </tr>
      </thead>
      <tbody>
      {animals.map((animal, index) => (
        <tr>
          <td style={cellStyle}>{animal.name}</td>
          <td style={cellStyle}>{animal.age}</td>
          <td style={cellStyle}>{animal.type}</td>
          <td style={cellStyle}>{animal.breed}</td>
          <td style={cellStyle}>{animal.illness}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginBottom: '1rem',
  };
  
const cellStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  };
export default AnimalCard