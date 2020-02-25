import React, { useReducer, useState } from "react";
import uuid from "uuid/v4";

const initialState = {
  toDos: []
};

const ADD = "add";
const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload, id: uuid() }] };
    case DEL:
      return { toDos: state.toDos.filter(toDo => toDo.id !== action.payload) };
    default:
      return;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewToDo] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newTodo });
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewToDo(value);
  };

  return (
    <>
      <h1>Add Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={newTodo}
          type="text"
          placeholder="Write to do"
        />
      </form>
      <ul>
        <h3>To Dos</h3>
        {state.toDos.map(toDo => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
