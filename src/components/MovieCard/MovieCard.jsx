import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbId}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src="https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
              alt="movie-poster"
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
