import React, { useState } from 'react';




function Fruit({ name, onDelete }) {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [textColor, setTextColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTextColor(randomColor);
  };

  return (
    <div data-testid="fruit">
      <p style={{ color: textColor }}>{name}</p>
      <button onClick={onDelete}>delete</button>
      <button onClick={changeColor}>change color</button>
    </div>
  );
}




export default Fruit;

