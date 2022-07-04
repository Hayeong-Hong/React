import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  }

  const goArticles = () =>{
    navigate('/articles');
  }

  const goHome = () =>{
    navigate('/');
  }

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header<br/>
        <button type="button" onClick={goHome}>홈으로</button>
        <button type="button" onClick={goback}>뒤로가기</button>
        <button type="button" onClick={goArticles}>게시글 목록으로 가기</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
