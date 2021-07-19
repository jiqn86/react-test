export const actionsTypes = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_ID: 'FETCH_DATA_ID',
  DELETE_MOVIE: 'DELETE_MOVIE',
  FILTER_MOVIE: 'FILTER_MOVIE',
  ADD_NEW_MOVIE: 'ADD_NEW_MOVIE',
};

export const fetchData = (data) => ({
  type: actionsTypes.FETCH_DATA,
  payload: data,
});

export const fetchMovieDetail = (movieID) => ({
  type: actionsTypes.FETCH_DATA_ID,
  payload: movieID,
});

export const deleteMovie = (movieID) => ({
  type: actionsTypes.DELETE_MOVIE,
  payload: movieID,
});

export const filterMovieAction = (category) => ({
  type: actionsTypes.FILTER_MOVIE,
  payload: category,
});

export const addNewMovieAction = (data) => ({
  type: actionsTypes.ADD_NEW_MOVIE,
  payload: data,
});
