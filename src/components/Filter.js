import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize, categoryFromMovies } from '../helpers';

function Filter({ movies, handleChange }) {
  const categories = categoryFromMovies(movies);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <ButtonDropdown onClick={handleChange} isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle split>
          <FontAwesomeIcon icon={faFilter} />
          {' '}
          Filter
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>All Items</DropdownItem>
          {
            categories.map((category) => (
              <DropdownItem key={category.id}>
                {capitalize(category)}
              </DropdownItem>
            ))
          }
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

Filter.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      category: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
