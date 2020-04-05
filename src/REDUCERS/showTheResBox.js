const initialState = {
  pickedVessel: null,
  showBox: false,
  eta: null,
  lastArrived: null,
  lastStarted: null,
  lastSailed: null,
  lastAgent: null,
  lastAgentLast: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "pickVessel") {
    return {
      ...state,
      showBox: true,
      pickedVessel: action.vesselName,
      eta: action.eta,
      lastArrived: action.lastArrived,
      lastStarted: action.lastStarted,
      lastSailed: action.lastSailed,
      lastAgent: action.lastAgent,
      lastAgentLast: action.lastAgentLast,
    };
  }

  return state;
};

export default reducer;
