import React, { useReducer, useState } from "react";

const initialState = {
  toDos: []
};

const ADD = "add";

const reducer = (state, action) => {
  switch (action) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
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
        {state.toDos.map((toDo, index) => (
          <li key={index}>{toDo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
