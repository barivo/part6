import anecdoteServices from "../services/anecdotes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT":
      const id = action.data.id;
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data
      );
    case "CREATE":
      return [...state, action.data];
    case "INIT":
      return action.data;
    default:
      return state;
  }
};

export const incrementVote = (id, votes) => {
  return async dispatch => {
    const updated = await anecdoteServices.addVote(id, votes + 1);
    dispatch({ type: "INCREMENT", data: updated });
  };
};

export const initializeAnecdotes = array => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll();
    dispatch({
      type: "INIT",
      data: anecdotes
    });
  };
};

export const addNew = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.addNew(content);
    dispatch({ type: "CREATE", data: newAnecdote });
  };
};

export default reducer;
