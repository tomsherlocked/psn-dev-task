import React from "react";

import { getSomeVideos } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function VideoList() {
  const navigate = useNavigate();

  const videos = getSomeVideos(10);

  const VideoTile = ({ children }) => {
    const publishDate = new Date(children.publishDate);
    return (
      <li className="tile" onClick={() => navigate(`/watch/${children._id}`)}>
        {/* video component */}
        <img alt="thumb" src={`https://img.youtube.com/vi/${children._id}/mqdefault.jpg`} />
        <div className="relative">
          <p className="tile__title">{children.title}</p>
          <p className="tile__subtitle">{publishDate.toDateString()}</p>
        </div>
      </li>
    );
  };

  return (
    <ul>
      {videos.map((video, index) => {
        return <VideoTile key={index}>{video}</VideoTile>;
      })}
    </ul>
  );
}
