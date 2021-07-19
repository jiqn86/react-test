/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addNewMovieAction } from '../../redux/actions';

function AddDVDModal({
  className, status, modalStatus, setmodalStatus, newMovie,
}) {
  const [modal, setModal] = useState(false);
  const toggle = () => setmodalStatus(!modalStatus);
  const [formData, setFormData] = useState({
    name: null,
    category: null,
    featured: false,
  });
  const handleAtrrChange = (event) => {
    const { id, value } = event.target;
    if (id === 'featured') {
      setFormData({
        ...formData,
        featured: !FormData.featured,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };
  const handleSubmit = () => {
    if (formData.name || formData.category) {
      newMovie(formData);
    }
    toggle();
  };
  return (
    <div className="add-dvd-modal">
      <Modal isOpen={status} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add a New DVD.</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name: </Label>
              <Input id="name" required onChange={handleAtrrChange} />
              <Label for="category">Category: </Label>
              <Input id="category" onChange={handleAtrrChange} />
              <Label for="featured">
                <Input
                  id="featured"
                  defaultChecked={FormData.featured}
                  onChange={handleAtrrChange}
                  type="checkbox"
                />
                {' '}
                Featured
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit}>Save</Button>
          {' '}
          <Button className="btnRemove" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  newMovie: (data) => dispatch(addNewMovieAction(data)),
});

AddDVDModal.defaultProps = {
  className: undefined,
};

AddDVDModal.propTypes = {
  status: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(AddDVDModal);
