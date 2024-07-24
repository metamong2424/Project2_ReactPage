// 이 컴포넌트는 videos라는 prop으로 비디오 배열을 받아와서
// video-grid 클래스를 가진 div 요소 내에 VideoCard 컴포넌트를 배열의 각 비디오에 대해 생성함.
// index를 key로 사용하여 각 VideoCard를 구분함. VideoGrid.css 파일에서 스타일을 불러옴.

import React from "react"; // 리액트 라이브러리를 불러옴
import VideoCard from "./VideoCard"; // VideoCard 컴포넌트를 불러옴
import "../styles/VideoGrid.css"; // VideoGrid 컴포넌트의 스타일을 불러옴
import { Video } from "../type/video"; // 비디오 타입 정의를 불러옴

// VideoGrid 컴포넌트가 받을 props의 타입을 정의함
interface VideoGridProps {
  videos: Video[]; // 비디오 배열을 prop으로 받음
}

// VideoGrid 컴포넌트를 정의함
const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    //video-grid 클래스를 가진 div 요소를 반환함

    <div className="video-grid">
      {" "}
      {videos.map(
        (video, index) => (
          <VideoCard key={index} video={video} />
        ) /* 비디오 배열을 순회하며 VideoCard 컴포넌트를 생성함 */
      )}
    </div>
  );
};

export default VideoGrid; // VideoGrid 컴포넌트를 내보냄
