import React from "react";
import { connect } from "react-redux";
import { addNew } from "../reducers/anecdoteReducer";

const AnecdoteForm = props => {
  const addAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.addNew(content);
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

const mapDispatchToProps = {
  addNew
};
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm;
