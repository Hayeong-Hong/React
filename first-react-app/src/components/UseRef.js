import React, { useRef, useState } from 'react';

const UseRef = () => {
    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;

    const handleChange = (e) =>{
        const {name, value} = e.target;
        const nextInput = {
            ...inputs,
            [name] : value
        }
        setInputs(nextInput);
    }

    const handleClick = () => {
        alert(name + ' : ' + nickname);
        setInputs({
            name:'',
            nickname:'',
        });

        console.log(nameInput);
        nameInput.current.focus();
    }
    return (
        <div>
            <input
            name='name'
            placeholder='이름'
            onChange={handleChange}
            value={name}
            ref={nameInput}
            ></input>
                        <input
            name='nickname'
            placeholder='별명'
            onChange={handleChange}
            value={nickname}
            ></input>
            <button onClick={handleClick}>확인</button>
        </div>
    );
};

export default UseRef;