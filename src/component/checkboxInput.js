import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, completed, checkboxHandler }) => (
  <div className="checkbox">
    <input type="checkbox" checked={completed} onChange={() => checkboxHandler(id)} />
  </div>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  checkboxHandler: PropTypes.func.isRequired,
};

export default Checkbox;
