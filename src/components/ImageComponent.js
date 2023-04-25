import React from "react";

function ImageComponent(props) {
  return (
    <div className="image-container">
      <img src={props.imageSrc} alt={props.imageAlt}  style={{ width: '50px', height: '50px' }} />
    </div>
  );
}

export default ImageComponent;
