import React, { useState } from 'react';

const EventPractice = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    alert(message);
    setMessage('');
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요."
        onChange={
          handleChange
          /*    (e) => {
          setMessage(e.target.value);
        } */
        }
        value={message}
      ></input>
      <button
        onClick={
          handleClick
          /*  () => {
          alert(message);
          setMessage('');
        } */
        }
      >
        확인
      </button>
    </div>
  );
};

export default EventPractice;
