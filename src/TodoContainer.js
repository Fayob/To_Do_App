import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import InputTodo from "./component/InputTodo";
import TodoLists from "./component/TodoLists";
import { v4 as uuidv4 } from "uuid"

function App() {
  const [state, setState] = useState({
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  });

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    setState({
      todos: [...state.todos, newTodo]
    })
  }

  const setUpdate = (updatedTitle, id) => {
    setState({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    }),
  })
}

  const checkboxHandler = (id) => {
    setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  const removeHandler = (id) => {
    setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id)
    }))
  }

  useEffect(() => {
    const loadedTodos = JSON.parse(localStorage.getItem("todos"))
    if (loadedTodos) {
      setState({todos: loadedTodos})
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(state.todos)
      localStorage.setItem("todos", temp)
    }, [state.todos])

  return (
    <div className="container">
      <div className="inner">
      {<Header />}
      {<InputTodo addTodoItem={addTodoItem} />}
    {<TodoLists todos={state.todos} checkboxHandler={checkboxHandler} removeHandler={removeHandler} setUpdate={setUpdate} />}
      </div>
    </div>
  );
}

export default App;
