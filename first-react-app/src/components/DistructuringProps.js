import React from 'react';

const DistructuringProps = (props) => {
    const {name, tel, children} = props;
    return (
        <div>
            <p>안녕하세요. 제 이름은 {name}입니다.</p>
            <p>전화번호는 {tel}입니다.</p>
            <p>{children}</p>
        </div>
    );
};

DistructuringProps.defaultProps = {
    name: "기본이름",
    tel : "010-0000-0000"
}

export default DistructuringProps;