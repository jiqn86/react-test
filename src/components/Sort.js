import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

function Sort({ handleSortChange }) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <ButtonDropdown onClick={handleSortChange} isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle split>
          <FontAwesomeIcon icon={faSort} />
          {' '}
          Sort
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>By Category</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>By Title</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

Sort.propTypes = {
  handleSortChange: PropTypes.func.isRequired,
};

export default Sort;
