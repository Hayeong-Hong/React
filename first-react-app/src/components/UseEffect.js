import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [count, setCount] = useState(0);

  useEffect(
    () => {
/*       console.log('name값이 업데이트될 때마다 실행.');
      console.log({
        name,
        nickname,
      });
      setCount(count + 1); */
      //클린업 함수 리턴
      return () => {//클린업 함수
        console.log('cleanup');
        //setCount(0);
        console.log(name);
      }
    },
    [name/* , nickname */] /* 어떤 값에 업데이트 상태에 따라서 실행될 것인지 지정 */
  );

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={changeName}></input>
      <input value={nickname} onChange={changeNickname}></input>
      <br />
      <b>이름: {name}</b>
      <br />
      <b>별명: {nickname}</b>
      <br />
      <b>렌더링 횟수는: {count}</b>
    </div>
  );
};

export default UseEffect;
