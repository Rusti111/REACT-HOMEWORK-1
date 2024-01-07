import React from 'react';
import { useState } from 'react';
import minus from './img/1-5.jpg';
import first from './img/3.jpg';
import second from './img/4.jpg';
import third from './img/5.jpg';
import last from './img/2.jpg';
import './style.css';

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div>

      <h1>Счетчик</h1>

      <h2>{num} {num === 15 ? 'max' : num === 0 ? 'min' : ''} </h2>

      <button className='but' onClick={() => {
        if (num < 15) setNum(num + 1);
      }}>+</button>

      <button className='but' onClick={() => {
        if (num > -1) setNum(num - 1);
      }}>-</button>

      <button className='but' onClick={() => {
        setNum(0)
      }}>reset</button>

      <button className='but' onClick={() => {
        setNum(15)
      }}>max</button>

      <button className='but' onClick={() => {
        if (num > 10) {
          setNum(15);
        } else {
          setNum(num + 5)
        }
      }}>+5</button>

      <button className='but' onClick={() => {
        if (num < 5) {
          setNum(0)
        } else {
          setNum(num - 5)
        }
      }}>-5</button>

      <br />

      <img onClick={() => {
        if (num < 15) setNum(num + 1);
      }} className='donkey' src={

        num < 0
          ? minus
          : num < 5
            ? first
            : num < 10
              ? second
              : num < 15
                ? third
                : last
      } alt="" />

    </div>
  );
}

export default App;
