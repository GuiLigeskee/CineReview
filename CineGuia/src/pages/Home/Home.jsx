import { useState, useEffect } from "react";
import "../MovieGrid.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPopularMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
    const popularUrl = `${moviesUrl}popular?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
    getPopularMovies(popularUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top rated films:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <h2 className="title">Featured Films:</h2>
      <div className="movies-container">
        {popularMovies.length === 0 && <p>Carregando</p>}
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
