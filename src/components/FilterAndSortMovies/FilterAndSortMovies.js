/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { filterMovies, formatStr, useQuery } from '../../helpers';
import Movies from '../Movies/Movies';
import AddDVDModal from '../AddDVDModal/AddDVDModal';
import Filter from '../Filter';
import Sort from '../Sort';

function FilterAndSortMovies({ movies }) {
  const [filteredMovie, setFilteredMovie] = useState(movies);
  useEffect(() => {
    setFilteredMovie(movies);
  }, [movies.length]);
  const handleChange = (event) => {
    const value = formatStr(event.target.textContent);
    if (value !== 'filter') {
      setFilteredMovie(filterMovies(movies, value));
    }
  };
  const handleSortChange = (event) => {
    const value = formatStr(event.target.textContent);
    const element = [];
    if (value === 'category') {
      element.push(
        ...filteredMovie.sort((a, b) => a.category.localeCompare(b.category)),
      );
    } else if (value === 'title') {
      element.push(
        ...filteredMovie.sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
    if (value === 'category' || value === 'title') {
      setFilteredMovie(element);
    }
  };

  const query = useQuery();
  const status = query.get('admin');
  const [modalStatus, setmodalStatus] = useState(false);
  const addDVDHandler = () => {
    setmodalStatus(true);
  };
  return (
    <div className="container list-page">
      <div className="list-page-header">
        <div className="list-page-options">
          {status && (
            <div className="status-actions">
              <div className="selectors">
                <Filter movies={movies} handleChange={handleChange} />
                <Sort handleSortChange={handleSortChange} />
              </div>
              <div className="selector-btn">
                <button type="submit" onClick={addDVDHandler} color="info">
                  <FontAwesomeIcon icon={faPlus} />
                  Add new DVD
                </button>
              </div>
            </div>
          )}
          {!status && (
            <div className="status-no-actions">
              <Filter movies={movies} handleChange={handleChange} />
              <Sort handleSortChange={handleSortChange} />
            </div>
          )}
        </div>
      </div>
      <AddDVDModal
        status={modalStatus}
        modalStatus={modalStatus}
        setmodalStatus={setmodalStatus}
      />
      <div className="movies-list">
        {filteredMovie.map((movie) => (
          <Movies key={movie.id} status={status} movie={movie} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movies: state.getMovies.data,
});

FilterAndSortMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(FilterAndSortMovies);
