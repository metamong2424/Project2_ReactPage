// 이 컴포넌트는 video라는 prop을 받아와서 비디오 카드 형태로 표시합니다.
// ReactPlayer 컴포넌트를 사용하여 비디오를 재생하며, 비디오 정보(포지션, 번호, 제목)를 표시합니다.
// VideoCard.css 파일에서 스타일을 불러옵니다.

import React from "react"; // 리액트를 불러옴
import ReactPlayer from "react-player"; // ReactPlayer 컴포넌트를 불러옴
import "../styles/VideoCard.css"; // VideoCard 컴포넌트의 스타일을 불러옴
import { Video } from "../type/video"; // 비디오 타입 정의를 불러옴

// VideoCard 컴포넌트의 props 타입을 정의함
interface VideoCardProps {
  video: Video; // video라는 Video 타입의 prop을 받음
}

// VideoCard 컴포넌트를 정의함
const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="video-list">
      {" "}
      {/* video-list 클래스를 가진 div 요소를 반환함 */}
      <div className="video-card">
        {" "}
        {/* video-card 클래스를 가진 div 요소를 반환함 */}
        <ReactPlayer url={video.link} controls width="100%" />{" "}
        {/* ReactPlayer 컴포넌트를 사용하여 비디오를 재생함 */}
        <div className="video-info">
          {" "}
          {/* video-info 클래스를 가진 div 요소를 반환함 */}
          <div>{video.position}</div> {/* 선수 이름을 표시함 */}
          <div>{video.playerNum}</div> {/* 선수의 포지션을 표시함 */}
          <div>{video.name}</div> {/* 선수번호를 표시함 */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard; // VideoCard 컴포넌트를 내보냄
// 각각의 데이터의 정보를 불러올것.
