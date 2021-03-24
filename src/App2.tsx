import { useState } from 'react';
import faker from 'faker';
import cx from "classnames";

import './App2.scss';

interface FakeRecord {
  QR: string;
  name: string;
}

type AniName = 'start' | 'stop' | 'run' | '';

const generateList = (): FakeRecord[] => {
  let QRlist = [];
  for(var i = 0; i < 100; i++) {
    QRlist.push({QR: faker.internet.password(), name: faker.name.findName()});
  }
  return QRlist;
}

const QRlist: FakeRecord[] = generateList();

const generate10 = (QRlist: FakeRecord[]): FakeRecord[] => {
  return [...QRlist].sort(() => Math.random() - .5).slice(0, 16);
}

const List10 = generate10(QRlist).map( i => i.QR);

export default function App() {
  const [aniName, setAniName] = useState<AniName>("");
  const [unclick, setUnclick] = useState<boolean>(false);

// number
  const handleClick = () => {
    setUnclick(true);
    setAniName("start");
    setTimeout(() => {
      setTimeout(() => setAniName("stop"), 3000);
      setAniName("run")
    }, 3000);
    
  }

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
                      {List10.map(QR => 
                        <div className="QR" key={QR}>{QR}</div>
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
