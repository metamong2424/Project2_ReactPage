// 이 컴포넌트는 헤더를 렌더링하며, 로고 이미지와 세 개의 응원가 제목을 포함합니다.
// Header.css 파일에서 스타일을 불러오고, eagles.jpg 이미지를 로고로 사용합니다.
// console.log("test")는 콘솔에 "test"라는 메시지를 출력하는 디버깅 용도입니다.

import React from "react"; // 리액트를 불러옵니다.
import "../styles/Header.css"; // 헤더 컴포넌트의 스타일을 불러옵니다.
import logo from "../image/eagles.jpg"; // 로고 이미지 경로를 지정합니다.

const Header: React.FC = () => {
  return (
    <header className="header">
      {" "}
      {/* header 클래스를 가진 헤더 요소를 반환합니다. */}
      <img src={logo} alt="Logo" className="logo" />{" "}
      {/* 로고 이미지를 표시합니다. */}
      <div className="header_Sub">
        {" "}
        {/* header_Sub 클래스를 가진 div 요소를 반환합니다. */}
        <h1 className="player-song">선수 응원가</h1>{" "}
        {/* player-song 클래스를 가진 h1 요소를 반환합니다. */}
        <h1 className="team-song">팀 응원가</h1>{" "}
        {/* team-song 클래스를 가진 h1 요소를 반환합니다. */}
        <h1 className="situation-song">상황 응원가</h1>{" "}
        {/* situation-song 클래스를 가진 h1 요소를 반환합니다. */}
      </div>
    </header>
  );
};

export default Header; // Header 컴포넌트를 내보냅니다.
