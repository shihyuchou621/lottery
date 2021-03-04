import './App.css';
import React, { useState } from 'react';

let randomDraw = Math.floor(Math.random() * 1000);

export default function App() {
  const [drawNum, setDrawNum] = useState([]);

  
  const handleClick = () => {
    drawNum.push(randomDraw);
  }

  console.log(drawNum, 10);

  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
      {drawNum}
    </div>
  );
}
