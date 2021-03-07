import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}
const Row = ({ title, fetchUrl, isLargeRow = false }: Props) => {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const url = `https://api.themoviedb.org/3${fetchUrl}`;
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      {movies.map((movie: string) => (
        <img
          src={`${baseURL}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))}
    </div>
  );
};

export default Row;
