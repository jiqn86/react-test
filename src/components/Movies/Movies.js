/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { deleteMovie } from '../../redux/actions';

function Movies({ movie, status, deleteMovieHandler }) {
  const handleDelete = (id) => {
    deleteMovieHandler(id);
  };
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-info">
          <div className="img-holder">
            {movie.image && <img src={movie.image} alt={movie.name} />}
            {!movie.image && <h3>Image unavailable</h3>}
          </div>
        </div>
        <span>{movie.category}</span>
      </Link>
      <div className="movie-control row">
        <div className="col col-md-8">
          <h1>{movie.name}</h1>
        </div>
        <div className="col col-md-4">
          {status && (
            <Button className="deleteBtn" onClick={() => handleDelete(movie.id)} color="danger">
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteMovieHandler: (id) => dispatch(deleteMovie(id)),
});

Movies.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Movies);
