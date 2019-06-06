import React, { Fragment } from "react";
import PropTypes from "prop-types";
// TODO:
// Fill out the list item card with Title, Image, year
// Create a button that will remove a movie from the queue
// create a button that will clear the queue

import "./Queue.css";
import MovieCard from "./movieCard";

const Queue = ({ queue, removeFromQueue, clearQueue }) => (
  <Fragment>
    <div className="queue__header">
      <h1>Queue</h1>
      <button className="button button__clear_queue" onClick={clearQueue}>
        clear queue
      </button>
    </div>

    <ul className="movie__list">
      {queue &&
        queue.map(movie => (
          <li key={movie.id}>
            <MovieCard
              {...movie}
              actionContent={
                <button
                  className="button"
                  onClick={() => removeFromQueue(movie.id)}
                >
                  x
                </button>
              }
            />
          </li>
        ))}
    </ul>
  </Fragment>
);

Queue.propTypes = {
  queue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      movieId: PropTypes.number
    })
  )
};

Queue.defaultProps = {
  queue: []
};

export default Queue;
