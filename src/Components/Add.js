import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

export default () => {
  const [newTodo, setNewToDo] = useState("");
  const dispatch = useDispatch();

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
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={newTodo}
        type="text"
        placeholder="Write to do"
      />
    </form>
  );
};
