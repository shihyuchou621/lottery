import './App2.scss';
import React, { useState, useEffect } from 'react';
// import faker from 'faker';
import cx from "classnames";

// const generateList = num => {
//   let QRlist = [];
//   for(var i = 0; i < num; i++) {
//     QRlist.push({QR: faker.internet.password(), name: faker.name.findName()});
//   }
//   return QRlist;
// }

// const QRlist = generateList(200);

const generate10 = (QRlist) => {
  return [...QRlist].sort(() => Math.random() - .5).slice(0, 16); // 不寫[...QRlist]只寫QRlist的話，因為是同一個記憶體位置，可能會回傳原本的東西
}


export default function App() {
  // const [drawList, setDrawList] = useState([]);
  const [aniName, setAniName] = useState("");
  const [unclick, setUnclick] = useState(false);
  const [list, setList] = useState([]);
  
  const List10 = generate10(list);
  // const draw = () => {
  //   let drawNum = null;
  //   do {
  //     drawNum = Math.floor(Math.random() * 6);
  //   } while (drawList.indexOf(QRlist[drawNum]) > -1);
  //   return drawNum;
  // }
// number

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then((res) => res.json())
      .then(setList);
  }, [])

  const handleClick = () => {
    setUnclick(true);
    setAniName("start");
    setTimeout(() => {
      setTimeout(() => setAniName("stop"), 3000);
      setAniName("run")
    }, 3000);
    
    // const drawNum = draw();
    // setDrawList([QRlist[drawNum], ...drawList]);

  }

  // const { name, QR } = QRlist.find(i => i === drawList[0]) || {}; // 如果find找不到(前面是falsly)要給空物件

  return (
    <div className="App">
      <div className="award">
        <div className="border-out">
          <div className="border-middle">
            <div className="inner-out">
              <div className="inner-middle">
                <div className="inner-middle">
                  <div className="text">
                    <div className={cx("roller",{
                      [aniName]: true
                    })}>
                      {List10.map((QR, index) => 
                        <div className="QR" key={index}>{QR}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-bottom">  
          <button 
            className="button"
            onClick={handleClick}
            disabled={unclick}
          >
            <div className="button-text">
              開始抽獎
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
