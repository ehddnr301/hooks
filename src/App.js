import React, { useReducer, useState } from "react";

import reducer, {
  initialState,
  ADD,
  DEL,
  COMPLETE,
  UNCOMPLETE
} from "./reducer";

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
            <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              ❌
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              ✅
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h3>Completed</h3>
            {state.completed.map(toDo => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
                  ❌
                </span>
                <span
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  👋
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default App;
