import React from "react";
import "../styles/Header.css";
import logo from "../image/eagles.jpg"; // 로고 이미지 경로를 지정합니다.

const Header: React.FC = () => {
  console.log("test");
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="header_Sub">
        <h1 className="player-song">선수 응원가</h1>
        <h1 className="team-song">팀 응원가</h1>
        <h1 className="situation-song">상황 응원가</h1>
      </div>
    </header>
  );
};

export default Header;
