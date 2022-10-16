import React, { useEffect } from "react";

import { useState } from 'react';
import Movies from "../src/Components/Movies";
import Hero from "../src/Components/Hero";
import Nav from "../src/Components/Nav";
import Featured from "./Components/Featured";
import Footer from "../src/Components/Footer";
import Buttons from "../src/Components/Buttons";


function App ()  {
  const [movie, setMovie] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setMovie(responseData.results);
        console.log(responseData)
      });
  })
  return (
    <>
      <div>
        <div className="hero-nav">
          <Nav />
          <Hero />
        </div>
        <div>
          <Featured />
        </div>
        <div className="heading">
          <h1>All Movies</h1>
          <Buttons />
          <div className="sort">
            <p>Sort by</p>
            <select name="" id="">
              <option value="venom">Latest</option>
              <option value="deadpool">Deadpool</option>
              <option value="venom">Venom</option>
              <option value="incredible">Incredible</option>
            </select>
            <select name="" id="">
              <option value="venom">Year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>

            <select name="" id="">
              <option value="venom">A-Z</option>
              <option value="2020">A</option>
              <option value="2021">B</option>
              <option value="2022">C</option>
              <option value="2022">D</option>
              <option value="2022">E</option>
            </select>
          </div>
        </div>
        <div className="container">
          {movie?.slice(0, 60).map((movie) => (
            <Movies key={movie.id} movie={movie} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
