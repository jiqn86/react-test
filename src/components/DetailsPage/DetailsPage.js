/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieDetail } from '../../redux/actions';

function DetailsPage({ match, grabMovie, movie }) {
  const { id } = match.params;
  const { name, image, category } = movie;
  useEffect(() => {
    (grabMovie(Number(id)));
  }, [id]);
  return (
    <div className="movie-detail">
      <div className="movie-detail-info">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <span>{category}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.getDetails.movieDetails,
});

const mapDispatchToProps = (dispatch) => ({
  grabMovie: (id) => dispatch(fetchMovieDetail(id)),
});

DetailsPage.propTypes = {
  details: PropTypes.shape(
    {
      name: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
    },
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
