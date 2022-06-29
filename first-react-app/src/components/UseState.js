import React, { useState } from 'react';

const UseState = () => {
  const [message, setMessage] = useState(/* 초기값 설정 */ '');
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState('black');
  const onEnter = () => setMessage('안녕하세요.');
  const onExit = () => setMessage('안녕히 가세요.');

  const onIncrease = () => setNumber(number + 1);
  const onDecrease = () => setNumber(number - 1);
  return (
    <div>
      <button onClick={onEnter}>입장</button>
      <button onClick={onExit}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color:'red'}} onClick={() => setColor('red')}>빨간색</button>
      <button style={{color:'green'}} onClick={() => setColor('green')}>초록색</button>
      <button style={{color:'blue'}} onClick={() => setColor('blue')}>파란색</button>
      <br />
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
      <h1>{number}</h1>
    </div>
  );
};

export default UseState;
