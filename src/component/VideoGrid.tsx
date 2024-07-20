import React from "react";
import VideoCard from "./VideoCard";
import "../styles/VideoGrid.css";
import { Video } from "../type/video";

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;
