import React from "react";
import PropTypes from "prop-types";

import "./movieCard.css";

const MovieCard = ({ id, title, releaseDate, poster, actionContent }) => (
  <div className="card">
    <img src={poster} alt={`${title}-poster`} />
    <div className="card__info">
      <div className="card__meta">
        <div className="card__title">{title}</div>
        <div className="card__date">{releaseDate}</div>
      </div>
      <div>{actionContent}</div>
    </div>
  </div>
);

MovieCard.propTypes = {
  movieId: PropTypes.number,
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  poster: PropTypes.string,
  actionContent: PropTypes.node
};

export default MovieCard;
