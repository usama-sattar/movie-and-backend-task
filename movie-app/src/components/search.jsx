import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import MovieBox from "./movie-box";
import "../App.css";

function Search() {
  const [movies, setMovies] = useState([]);
  const title = useRef("");

  const searchMovie = async (e) => {
    getMovies();
  };
  const getMovies = async () => {
    let movieName = title.current.value;
    if (movieName !== "") {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${movieName}&apikey=46539119`
      );
      const data = await response.data;
      await setMovies(data);
      console.log(movies);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movie Name"
          name="movie"
          ref={title}
        ></input>
        <input
          type="button"
          value="Search"
          onClick={(event) => searchMovie(event)}
        />
      </div>
      <div>
        <MovieBox movieInfo={movies} />;
      </div>
    </div>
  );
}

export default Search;
