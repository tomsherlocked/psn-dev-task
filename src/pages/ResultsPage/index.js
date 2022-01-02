import React from "react";
import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList";
export default function ResultsPage() {
  let { query } = useParams();

  const RELATED_CATEGORIES = [
    "Gravel",
    "GCN Tech",
    "GCN Show",
    "Racing News",
    "New Gear",
    "Competitions",
  ];
  const Subtitle = () => (
    <p className="results__subtitle">
      If you're interested in {query}, you should also check out{" "}
      <a href="/#" className="results__link">
        {
          RELATED_CATEGORIES[
            Math.floor(Math.random() * RELATED_CATEGORIES.length)
          ]
        }
      </a>{" "}
      &{" "}
      <a href="/#" className="results__link">
        {
          RELATED_CATEGORIES[
            Math.floor(Math.random() * RELATED_CATEGORIES.length)
          ]
        }
      </a>
      !
    </p>
  );

  const SortingOptions = () => (
    <div className="results__filter">
      <p>Sort by:</p>
      <select
        onChange={() => {
          window.location.reload();
          // hacky data refresh! :)
        }}
      >
        <option>Popularity</option>
        <option>Age</option>
        <option>Series</option>
      </select>
    </div>
  );
  return (
    <div className="bg-absolute-white p-2">
      <h3 className="results__title">Results for "{query}"</h3>
      <Subtitle />
      <SortingOptions />
      <VideoList />
    </div>
  );
}
