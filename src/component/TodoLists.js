import React from 'react'
import TodoItem from './TodoItem'

const TodoLists = ({todos, checkboxHandler, removeHandler, setUpdate}) => {
  return (
    <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} checkboxHandler={checkboxHandler} removeHandler={removeHandler} setUpdate={setUpdate} />
        )}
      </ul>
  )
}

export default TodoLists