import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './component/Header';
import InputTodo from './component/InputTodo';
import TodoLists from './component/TodoLists';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './pages/Navbar';

function TodoContainer() {
  const [state, setState] = useState({
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  });

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };

  const setUpdate = (updatedTitle, id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

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
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  useEffect(() => {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'));
    if (loadedTodos) {
      setState({ todos: loadedTodos });
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(state.todos);
    localStorage.setItem('todos', temp);
  }, [state.todos]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoItem={addTodoItem} />
                <TodoLists
                  todos={state.todos}
                  checkboxHandler={checkboxHandler}
                  removeHandler={removeHandler}
                  setUpdate={setUpdate}
                />
              </div>
            </div>
      )}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default TodoContainer;
