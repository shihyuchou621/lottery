import './App.scss';
import React, { useState } from 'react';
import faker, { random } from 'faker';

const max = 5;

const generateList = () => {
  let QRlist = [];
  for(var i = 0; i < 100; i++) {
    QRlist.push({QR: faker.internet.password(), name: faker.name.findName()});
  }
  return QRlist;
}

const QRlist = generateList();

console.log(QRlist);

const generate10 = (QRlist) => {
  return [...QRlist].sort(() => Math.random() - .5).slice(0, 10); // 不寫[...QRlist]只寫QRlist的話，因為是同一個記憶體位置，可能會回傳原本的東西
}

const List10 = generate10(QRlist).map( i => i.QR);

console.log(List10);

export default function App() {
  const [drawList, setDrawList] = useState([]);

  const draw = () => {
    let drawNum = null;
    do {
      drawNum = Math.floor(Math.random() * 6);
    } while (drawList.indexOf(QRlist[drawNum]) > -1);
    return drawNum;
  }
// number
  const handleClick = () => {
    const drawNum = draw();
    setDrawList([QRlist[drawNum], ...drawList]);
  }

  const { name, QR } = QRlist.find(i => i === drawList[0]) || {}; // 如果find找不到(前面是falsly)要給空物件

  return (
    <div className="App">
      <div className="award">
        <div className="runningAward">
          {QR}
        </div>
        <button 
          className="button"
          onClick={handleClick}
          disabled={drawList.length >= max}
        >
        </button>
        <div 
          className="bar" 
          onClick={handleClick}
          disabled={drawList.length >= max}
        />
      </div>
      <div className="awardData">
        <div className="title">得獎者</div>
        <div className="content">{name}</div>
      </div>
      <div className="awardData">
        <div className="title">QRcode</div>
        <div className="content">{QR}</div>
      </div>
      <div>中獎清單</div>
      <table className="drawList">
        <thead>
          <tr>
            <th>得獎者</th>
            <th>QRcode</th>
          </tr>
        </thead>
        <tbody>
          {drawList.map(({ name, QR }) => 
          <tr key={QR}>
              <td>{name}</td>
              <td>{QR}</td>
          </tr>
          )}  
        </tbody>
      </table>
    </div>
  );
}
