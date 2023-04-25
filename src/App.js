import './App.css';
import person from './images/person.png';
import React, { useState, useEffect } from 'react';
import MovingImage from './components/MovingImage';

function App() {
  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const numCols = Math.ceil(window.innerWidth / 50);
      const numRows = Math.ceil(window.innerHeight / 50);
      setNumCols(numCols);
      setNumRows(numRows);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const grid = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      grid.push(
        <MovingImage
          key={`${i}-${j}`}
          imageSrc={person}
          xPos={j * 50}
          yPos={i * 50}
        />
      );
    }
  }

  return (
    <div>
      {grid}
    </div>
  );
}

export default App;
