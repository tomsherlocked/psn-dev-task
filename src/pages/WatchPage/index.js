import React from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import SearchBar from "../../components/SearchBar";
import Carousel from "../../components/Carousel";

import { getAllVideos, getSomeVideos } from "../../utils";

export default function WatchPage() {
  let { videoId } = useParams();
  const currentVideo = getAllVideos().filter(
    (video) => video._id === videoId
  )[0];
  const publishDate = new Date(currentVideo.publishDate);

  const VideoInfo = () => (
    <div className="video__info">
      <h1 className="video__title">{currentVideo.title}</h1>
      <h4 className="video__subtitle">
        Published: {publishDate.toDateString()}
      </h4>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading className="accordion__heading">
            <AccordionItemButton>Description</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion__content">
            <p>{currentVideo.description}</p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Share</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion__content">
            <p>Share icons go here</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Other example content</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion__content">
            <p>lorem etc etc</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <>
      <SearchBar />
      <div className="video">
        <iframe
          title="video"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="200px"
          src={`https://www.youtube.com/embed/${currentVideo._id}?autoplay=1`}
        />
      </div>
      <VideoInfo />
      <Carousel
        videoList={getSomeVideos(4)}
        title={"Love this? Choose one of these next!"}
      />
    </>
  );
}
