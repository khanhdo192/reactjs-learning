import React, { useState } from "react";

function getRandomColor() {
  const COLOR_LIST = ["brown", "green", "blue", "yellow", "gray"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function Header() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("box-color") || "red";
  });

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      <h1>Learning ReactJs - {color}</h1>
    </div>
  );
}

export default Header;
