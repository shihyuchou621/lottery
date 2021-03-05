import './App.css';
import React, { useState } from 'react';

const QRlist = [
  {name: "Kelly", QR: 1}, 
  {name: "Ben", QR: 2}, 
  {name: "Kon", QR: 3}, 
  {name: "By", QR: 4}, 
  {name: "BigCat", QR: 5}, 
  {name: "SmallCat", QR: 6}
];


export default function App() {
  const [drawList, setDrawList] = useState([]);
  const [drawNum, setDrawNum] = useState(null);
  const [awardList, setAwardList] = useState([
    {award: "first", QR: null}, 
    {award: "second", QR: null}, 
    {award: "third", QR: null}]
  );

  const draw = () => {
    let randomDraw = Math.floor(Math.random() * 6);
    if(drawList.indexOf(randomDraw) > -1) { draw(); }
    setDrawNum(randomDraw);
  }

  const handleClick = () => {
    draw();
    setDrawList([...drawList, QRlist[drawNum].QR]);
    awardList[0].QR = QRlist[drawNum].QR;
  }
  
  console.log(drawList, 10);

  
  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
      得獎者：{drawList[drawList.length-1]}
    </div>
  );
}
