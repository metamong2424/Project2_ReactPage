// HomePage 컴포넌트는 Header 컴포넌트와 VideoGrid 컴포넌트를 포함하며,
// useState 훅을 사용하여 비디오 데이터를 상태로 관리합니다.
// dummyVideos라는 더미 데이터를 초기값으로 설정하여 비디오 리스트를 표시합니다.
// HomePage.css 파일에서 스타일을 불러옵니다.

import React, { useState } from "react"; // 리액트와 useState 훅을 불러옵니다.
import Header from "./Header"; //Header 컴포넌트를 불러옵니다.
import VideoGrid from "./VideoGrid"; // VideoGrid 컴포넌트를 불러옵니다.
import "../styles/HomePage.css"; // HomePage 컴포넌트의 스타일을 불러옵니다.
import { Video } from "../type/video"; // 비디오 타입 정의를 불러옵니다.
import SearchBar from "./SearchBar"; // 서치바 정의를 불러옵니다.

// 더미 비디오 데이터를 정의합니다.
const dummyVideos: Video[] = [
  {
    name: "문현빈",
    position: "내야수",
    playerNum: 64,
    link: "https://www.youtube.com/watch?v=HgmaaVHGWBY", // 비디오 링크
  },
  {
    name: "채은성",
    position: "내야수",
    playerNum: 245,
    link: "https://youtu.be/eOxOFlp-biY?si=O0NTQZVUul2xOKAv", // 비디오 링크
  },
  {
    name: "안치홍",
    position: "내야수",
    playerNum: 245,
    link: "https://youtu.be/OffUbQFSS_4?si=OY2TmguAvT87S1qO", // 비디오 링크
  },
  {
    name: "이재원",
    position: "포수",
    playerNum: 245,
    link: "https://youtu.be/wDvisgmswVM?si=I5FMOdskIRBZHXi2", // 비디오 링크
  },
  {
    name: "하주석",
    position: "유격수",
    playerNum: 245,
    link: "https://youtu.be/exLJ6LmVng8?si=sr62pLKCmx__3Ut9", // 비디오 링크
  },
  {
    name: "하주석",
    position: "유격수",
    playerNum: 245,
    link: "https://youtu.be/exLJ6LmVng8?si=sr62pLKCmx__3Ut9", // 비디오 링크
  },
  {
    name: "하주석",
    position: "유격수",
    playerNum: 245,
    link: "https://youtu.be/exLJ6LmVng8?si=sr62pLKCmx__3Ut9", // 비디오 링크
  },
  {
    name: "하주석",
    position: "유격수",
    playerNum: 245,
    link: "https://youtu.be/exLJ6LmVng8?si=sr62pLKCmx__3Ut9", // 비디오 링크
  },
  {
    name: "하주석",
    position: "유격수",
    playerNum: 245,
    link: "https://youtu.be/exLJ6LmVng8?si=sr62pLKCmx__3Ut9", // 비디오 링크
  },
];

// HomePage 컴포넌트를 정의합니다.
const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(dummyVideos); // 비디오 상태를 정의하고 초기값으로 더미 데이터를 설정합니다.

  return (
    <div className="home-page">
      {" "}
      {/* home-page 클래스를 가진 div 요소를 반환합니다. */}
      <Header /> {/* Header 컴포넌트를 렌더링합니다. */}
      <SearchBar />
      <VideoGrid videos={videos} />{" "}
      {/* VideoGrid 컴포넌트를 렌더링하고 비디오 데이터를 전달합니다. */}
    </div>
  );
};

export default HomePage; // HomePage 컴포넌트를 내보냅니다.
