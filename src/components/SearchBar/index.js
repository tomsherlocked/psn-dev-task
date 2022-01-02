import React, { useState } from "react";
import { SpinnerDotted } from "spinners-react";

import { getSomeVideos } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    if (input.length > 2 && !!!results.length) {
      setOpen(true);
      setLoading(true);
      setTimeout(() => {
        setResults(getSomeVideos(5));
        setLoading(false);
      }, 1000);
    }

    if (event.key === "Enter") {
      setOpen(false);
      navigate(`/search/${input}`);
    }
  };

  const ResultsOverlay = () => {
    return (
      <div className="search__results-container">
        <div className="search__results">
          <p className="pb-4 font-semibold">Similar topics</p>
          <div className="search__buttons--three">
            <a
              className="search__button search__button--white search__button--small"
              href="/#"
            >
              Tech
            </a>
            <a
              className="search__button search__button--white search__button--small"
              href="/#"
            >
              Kit
            </a>
            <a
              className="search__button search__button--white search__button--small"
              href="/#"
            >
              Racing
            </a>
          </div>
          <p className="py-4 font-semibold">Suggested videos</p>
          {loading ? (
            <div>
              <SpinnerDotted color={"white"} className="search__loader" />
            </div>
          ) : (
            <>
              {!!results.length && (
                <ul className="search__list">
                  {results.map((videoItem, index) => (
                    <li
                      className="search__list-item"
                      key={index}
                      onClick={() => {
                        setOpen(false);
                        navigate(`/watch/${videoItem._id}`);
                      }}
                    >
                      {videoItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
          <div className="search__buttons">
            <a
              className="search__button search__button--white"
              href={`/search/${input}`}
            >
              Search Videos
            </a>
            <a className="search__button search__button--grey" href="/">
              Everything else
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for videos, shows, and more!"
        className="search__box"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={handleSearch}
        value={input}
      />

      {open && <ResultsOverlay />}
    </div>
  );
}
