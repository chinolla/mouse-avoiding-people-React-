import React, { useState, useEffect } from 'react';

function MovingImage(props) {
  const [x, setX] = useState(Math.random() * window.innerWidth);
  const [y, setY] = useState(Math.random() * window.innerHeight);
  const [xSpeed, setXSpeed] = useState(0);
  const [ySpeed, setYSpeed] = useState(0);

  const [positions, setPositions] = useState([{ x, y }]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorX = event.clientX;
      const cursorY = event.clientY;
      const dx = x - cursorX;
      const dy = y - cursorY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        setXSpeed((x - cursorX) / distance * 10);
        setYSpeed((y - cursorY) / distance * 10);
      } else {
        setXSpeed(0);
        setYSpeed(0);
      }
    };

    const handleMouseLeave = (event) => {
      setXSpeed(Math.random() * 6 - 3);
      setYSpeed(Math.random() * 6 - 3);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);


  useEffect(() => {
    const interval = setInterval(() => {
      let newX = x + xSpeed;
      let newY = y + ySpeed;

      if (newX < 0 || newX > window.innerWidth) {
        setXSpeed(xSpeed * -1);
      } else {
        setX(newX);
      }

      if (newY < 0 || newY > window.innerHeight) {
        setYSpeed(ySpeed * -1);
      } else {
        setY(newY);
      }

      // check if the new position overlaps with any existing positions
      let overlaps = false;
      for (const position of positions) {
        const dx = position.x - newX;
        const dy = position.y - newY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 1) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        // add the new position to the array if it doesn't overlap with any existing positions
        setPositions([...positions, { x: newX, y: newY }]);
      }
    }, .1);

    return () => clearInterval(interval);
  }, [x, y, xSpeed, ySpeed, positions]);

  return (
    <img
      src={props.imageSrc}
      alt={props.imageAlt}
      style={{ position: 'absolute', top: y, left: x, width: '50px', height: '50px' }}
    />
  );
}

export default MovingImage;
