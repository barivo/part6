const initialState = { type: "", data: "" };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      return { type: action.type, data: action.data };
    case "RESET":
      return initialState;
    default:
      return state;
  }
  //
};

export const setNotification = (msg, seconds) => {
  return async dispatch => {
    await setTimeout(() => dispatch(resetNotification), seconds * 1000);
    dispatch(votedOn(msg));
  };
};

export const votedOn = data => ({
  type: "VOTE",
  data
});

export const resetNotification = { type: "RESET" };

export default reducer;
