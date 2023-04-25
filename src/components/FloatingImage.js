import React, { useState, useEffect } from 'react';

function FloatingImage(props) {
    const [x, setX] = useState(Math.random() * window.innerWidth);
    const [y, setY] = useState(Math.random() * window.innerHeight);
    const [xSpeed, setXSpeed] = useState(Math.random() * 2 - 1);
    const [ySpeed, setYSpeed] = useState(Math.random() * 2 - 1);
  
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
      }, 10);
  
      return () => clearInterval(interval);
    }, [x, y, xSpeed, ySpeed]);
  
    return (
      <div className="floating-text" style={{ top: y, left: x }}>
        <img src={props.imageSrc} alt={props.imageAlt}  style={{ width: '50px', height: '50px' }} />
      </div>
    );
}
export default FloatingImage;