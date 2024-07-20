import React, { useState } from "react";
import Header from "./Header";
import VideoGrid from "./VideoGrid";
import "../styles/HomePage.css";
import { Video } from "../type/video";

const dummyVideos: Video[] = [
  {
    title: "문현빈 응원가",
    link: "https://www.youtube.com/watch?v=HgmaaVHGWBY",
  },
];

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>(dummyVideos);

  return (
    <div className="home-page">
      <Header />

      <VideoGrid videos={videos} />
    </div>
  );
};

export default HomePage;
