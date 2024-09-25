import React from "react";

import "./MovieCard.css";

import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="card-container">
      <a href={`/#/movie/${movie.id}`}>
        <div className="card">
          <div className="img-content">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
          </div>
          <div className="content">
            <p className="heading">{movie.title}</p>
            <p>{movie.overview}</p>
            <p>
              <FaStar /> {movie.vote_average}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
