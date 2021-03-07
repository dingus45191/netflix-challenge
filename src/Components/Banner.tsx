import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";

export const Banner = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return () => request;
    }
    fetchData();
  }, []);
  console.log(movies);
  function truncate(s: string, n: number) {
    return s?.length > n ? s.substr(0, n - 1) + "..." : s;
  }
  return (
    <header
      className="banner"
      style={{
        background: `url(
          "https://image.tmdb.org/t/p/original${movies?.backdrop_path}"
        )`,
        backgroundSize: "cover",

        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            "Duis ex eiusmod enim ad laboris consectetur. Ipsum qui exercitation cupidatat consectetur nostrud qui enim. Voluptate cillum aliquip officia pariatur non laboris do dolor incididunt. Laborum exercitation non dolor et nostrud. Dolor pariatur minim ex occaecat ut reprehenderit anim aute dolor deserunt incididunt minim duis sint.",
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};
