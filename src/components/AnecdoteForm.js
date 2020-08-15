import React from "react";
import { useDispatch } from "react-redux";
import { addNew } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(addNew(content));
  };

  const style = {
    border: "solid",
    padding: 5,
    borderWidth: 1
  };
  return (
    <div style={style}>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button style={{ margin: 10 + "px" }}>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
