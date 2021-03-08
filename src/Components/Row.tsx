import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Row.css";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}
const Row = ({ title, fetchUrl, isLargeRow = false }: Props) => {
  const [movies, setMovies] = useState<any>([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.themoviedb.org/3${fetchUrl}`;
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl, movies]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((m: any) => {
          if (m.poster_path || m.backdrop_path) {
            return (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseURL}${
                  isLargeRow ? m.poster_path : m.backdrop_path
                }`}
                alt={m.name}
                key={m.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Row;
