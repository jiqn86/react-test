import { combineReducers } from 'redux';
import { actionsTypes } from '../actions/index';
import { items } from '../config';

const initialState = {
  data: items,
  movieDetails: {},
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_DATA:
      return {
        data: [...state.data,
          ...action.payload],
      };
    case actionsTypes.ADD_NEW_MOVIE:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case actionsTypes.DELETE_MOVIE:
      return {
        data: [...state.data.filter((movie) => movie.id !== action.payload)],
      };
    default:
      return state;
  }
};

export const fetchTheMovie = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_DATA_ID:
      return {
        ...state,
        movieDetails: { ...state.data.filter((movie) => movie.id === action.payload)[0] },
      };
    default:
      return state;
  }
};

const filterMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FILTER_MOVIE:
      return {
        data: [...state.data.filter((movie) => movie.category === action.payload)],
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  getMovies: fetchDataReducer,
  getDetails: fetchTheMovie,
  filterMovie: filterMovieReducer,
});
