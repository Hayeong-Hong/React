import React from 'react';
import { Navigate } from 'react-router-dom';

const Mypage = () => {
    const isLogged = true;

    if(!isLogged){
        return <Navigate to="/Login" />
    }
    return (
        <div>
            마이페이지
        </div>
    );
};

export default Mypage;