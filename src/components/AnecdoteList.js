import React from "react";
import { connect } from "react-redux";
import { incrementVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const style = {
  border: "solid",
  padding: 5,
  marginTop: 10,
  marginBottom: 10,
  borderWidth: 1
};

const AnecdoteList = props => {
  const sortAnecdotes = anecdotes =>
    anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter(a =>
        props.filter.data
          ? a.content.toLowerCase().includes(props.filter.data)
          : a
      );

  return (
    <>
      {sortAnecdotes(props.anecdotes).map(anecdote => (
        <div key={anecdote.id} style={style}>
          <div style={{ marginBottom: 5 + "px" }}>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              style={{ margin: 5 + "px" }}
              onClick={() => props.incrementVote(anecdote.id, anecdote.votes)}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  };
};

const mapDispatchToProps = {
  incrementVote,
  setNotification
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
