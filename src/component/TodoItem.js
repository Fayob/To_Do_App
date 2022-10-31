import React, { useEffect, useState } from "react";
import Checkbox from "./checkboxInput";

const TodoItem = ({ todo, checkboxHandler, removeHandler, setUpdate }) => {
  const [state, setState] = useState({
    editing: false,
  });
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditing = () => {
    setState({
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
    setState({ editing: false })
    }
  }

  useEffect(() => {
    return () => {
      console.log('cleaning up...');
    }
  }, [])

  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <Checkbox
          id={todo.id}
          checkboxHandler={checkboxHandler}
          completed={todo.completed}
        />
        <button onClick={() => removeHandler(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>
      <input
        type="text"
        className="textInput"
        style={editMode}
        value={todo.title}
        onChange={(e) => {
          setUpdate(e.target.value, todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
