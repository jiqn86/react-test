import { useLocation } from 'react-router-dom';

const capitalize = (name) => {
  if (typeof name !== 'string') return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const categoryFromMovies = (arr) => {
  const setCategory = new Set();
  arr.map((item) => setCategory.add(item.category));
  return Array.from(setCategory).sort();
};

const filterMovies = (movies, filterText) => {
  if (filterText === 'items') return movies;
  return [...movies.filter((movie) => movie.category === filterText)];
};

const useQuery = () => new URLSearchParams(useLocation().search);

const formatStr = (str = '') => {
  const strArr = str.split(' ');
  if (strArr.length < 2) return strArr[0].toLowerCase();
  return strArr[1].toLowerCase();
};

export {
  capitalize, categoryFromMovies, filterMovies, useQuery, formatStr,
};
