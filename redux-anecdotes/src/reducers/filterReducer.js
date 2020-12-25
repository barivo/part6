const initialState = { type: "", data: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER":
      //
      return { data: action.data.trim().toLowerCase() };
    default:
      return state;
  }
};

export const filterOn = data => ({ type: "FILTER", data });

export default reducer;
