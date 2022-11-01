import PropTypes from 'prop-types';
import React, { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [state, setState] = useState({
    title: '',
  });

  const onChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.title.trim()) {
      alert('Please write item');
      return;
    }
    addTodoItem(state.title);
    setState({
      title: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        className="input-text"
        value={state.title}
        onChange={onChange}
        placeholder="Add Todo..."
      />
      <button type="button" className="input-submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
