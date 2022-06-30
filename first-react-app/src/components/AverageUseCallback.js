import React, { useCallback, useMemo, useState } from 'react';

const getAverage = (numbers) => {
    console.log('평균 값 계산중...');
    if(numbers.length ===0 ){
        return 0;
    }
    let sum = 0;
    numbers.forEach((element) => {
        sum += element;
    });
    return sum/numbers.length;
}

const AverageUseCallback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const handleChange = useCallback((e) =>{
        console.log('체인지함수 생성');
        setNumber(e.target.value);
    }, []/* 빈괄호 = 처음 렌더링이 될 때만 함수 생성 */);

    const handleClick = useCallback((e) => {
        console.log('클릭함수 생성');
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number, list]/* number와 list가 변경될 때마다 함수 생성 */);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={handleChange}></input>
            <button onClick={handleClick}>등록</button>
            <ul>
                {list.map((value, index)=> (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* 이벤트가 아니기 때문에 매개변수가 있는 함수여도 화살표 없이 바로 사용가능 */}
                <b>평균 값 : {avg}</b>
            </div>
        </div>
    );
};

export default AverageUseCallback;