import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(state =>
    state.anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter(a =>
        state.filter.data
          ? a.content.toLowerCase().includes(state.filter.data)
          : a
      )
  );
  const dispatch = useDispatch();

  const vote = anecdote => {
    dispatch(incrementVote(anecdote.id, anecdote.votes));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 3));
  };

  const style = {
    border: "solid",
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1
  };

  return (
    <>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id} style={style}>
          <div style={{ marginBottom: 5 + "px" }}>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button style={{ margin: 5 + "px" }} onClick={() => vote(anecdote)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
