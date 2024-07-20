import React from "react";
import ReactPlayer from "react-player";
import "../styles/VideoCard.css";
import { Video } from "../type/video";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="video-list">
      <div className="video-card">
        <ReactPlayer url={video.link} controls width="100%" />
        <div className="video-info">
          <div>내야수</div>
          <div>No.64</div>
          <div>문 현 빈</div>
        </div>
      </div>
      <div className="video-card">
        <ReactPlayer url={video.link} controls width="100%" />
        <div className="video-info">
          <div>내야수</div>
          <div>No.64</div>
          <div>문 현 빈</div>
        </div>
      </div>
      <div className="video-card">
        <ReactPlayer url={video.link} controls width="100%" />
        <div className="video-info">
          <div>내야수</div>
          <div>No.64</div>
          <div>문 현 빈</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
