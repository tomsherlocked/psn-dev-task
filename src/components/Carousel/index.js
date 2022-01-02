import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { useNavigate } from "react-router-dom";

export default function CarouselComponent({ videoList,title }) {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="carousel">
      <h4 className="carousel__title">{title}</h4>
      <Carousel
        updateOnItemClick
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{}}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 20,
            height: 20,
            minWidth: 20,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 20,
            height: 20,
            minWidth: 20,
            alignSelf: "center",
          },
        }}
        itemsToShow={3}
        speed={400}
      >
        {videoList.map((video, index) => (
          <div
            className="carousel__video-container"
            key={index}
            onClick={() => navigate(`/watch/${video._id}`)}
          >
            <img
              alt="video thumbnail"
              className="carousel__video"
              src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
