const initialState = {
  currentViewMethod: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "typeMode") {
    return {
      ...state,
      currentViewMethod: "typeMode",
    };
  }
  if (action.type === "clickMode") {
    return {
      ...state,
      currentViewMethod: "clickMode",
    };
  }

  return state;
};

export default reducer;
