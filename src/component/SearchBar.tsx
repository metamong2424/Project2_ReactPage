import React, { useState } from "react"; // 리액트와 useState 훅을 불러옵니다.
import "../styles/SearchBar.css"; // Search 컴포넌트의 스타일을 불러옵니다.

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState(""); // 검색어를 상태로 관리합니다.

  // 입력 필드의 값이 변경될 때 호출되는 함수입니다.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value); // 상태를 업데이트합니다.
  };

  // 검색 버튼을 클릭할 때 호출되는 함수입니다.
  const handleSearch = () => {
    console.log("검색어:", query); // 콘솔에 검색어를 출력합니다.
    // 실제 검색 로직은 여기에 추가하면 됩니다.
  };

  return (
    <header className="search">
      <div className="search_Sub">
        {/* search_Sub 클래스를 가진 div 요소를 반환합니다. */}
        <h1 className="array_Name">이름순 정렬</h1>
        {/* array_Name 클래스를 가진 h1 요소를 반환합니다. */}
        <h1 className="array_position">포지션 별 정렬</h1>
        {/* array_position 클래스를 가진 h1 요소를 반환합니다. */}
        <div className="searchBar">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="검색어를 입력하세요..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            검색
          </button>
        </div>
        {/* searchBar 클래스를 가진 div 요소를 반환합니다. */}
      </div>
    </header>
  );
};

export default SearchBar; // Search 컴포넌트를 내보냅니다.
