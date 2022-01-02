import React from "react";
import Carousel from "../../components/Carousel";
import SearchBar from "../../components/SearchBar";
import { getVideosByTopic } from "../../utils";
export default function HomePage() {
  const TopicCarousel = ({ topic, title }) => (
    <Carousel videoList={getVideosByTopic(topic, 4)} title={title} />
  );
  const topicList = [
    { topic: "gravel", title: "Gravel Riding" },
    { topic: "#askGCN", title: "GCN Tech" },
    { topic: "conor", title: "Presenters: Connor Dunne" },
  ];
  return (
    <div className="home">
      <SearchBar />
      <h2 className="home__title">Welcome to the Global Cycling Network!</h2>
      <p className="home__subtitle">
        Choose from one of our awesome topics below, or search for your
        favourite video!
      </p>

      {topicList.map((topicItem, index) => (
        <TopicCarousel
          topic={topicItem.topic}
          title={topicItem.title}
          key={index}
        />
      ))}
    </div>
  );
}
