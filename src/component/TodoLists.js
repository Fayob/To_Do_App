import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoLists = ({
  todos, checkboxHandler, removeHandler, setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkboxHandler={checkboxHandler}
        removeHandler={removeHandler}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodoLists.propTypes = {
  todos: PropTypes.string.isRequired,
  checkboxHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoLists;
