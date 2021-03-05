import './App.css';
import React, { useState } from 'react';

const max = 3;

const QRlist = [
  {QR: 'AAAAAAA', name: "Kelly"},
  {QR: 'BBBBBBB', name: "Ben"},
  {QR: 'CCCCCCC', name: "Kon"}, 
  {QR: 'DDDDDDD', name: "By"},
  {QR: 'EEEEEEE', name: "BigCat"},
  {QR: 'FFFFFFF', name: "SmallCat"},
];

export default function App() {
  const [drawList, setDrawList] = useState([]); // [QR, QR, ...]

  const draw = () => {
    let drawNum = null;
    do {
      drawNum = Math.floor(Math.random() * 6);
    } while (drawList.indexOf(QRlist[drawNum].QR) > -1);
    return drawNum;
  }
// number
  const handleClick = () => {
    const drawNum = draw();
    setDrawList([...drawList, QRlist[drawNum].QR]);
  }
  
  console.log(drawList);

  return (
    <div className="App">
      <button onClick={handleClick} disabled={drawList.length >= max}>click</button>
      得獎者：{drawList[drawList.length-1]}
    </div>
  );
}
