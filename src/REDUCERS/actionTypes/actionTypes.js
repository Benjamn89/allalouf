const actionTypes = {
  typeMode: (mode) => {
    return {
      type: mode,
    };
  },
  afterFetch: (dataInfo, vesselName) => {
    return {
      type: "pickVessel",
      vesselName: vesselName,
      eta: dataInfo[0],
      lastArrived: dataInfo[1],
      lastStarted: dataInfo[2],
      lastSailed: dataInfo[3],
      lastAgent: dataInfo[4],
      lastAgentLast: dataInfo[5],
    };
  },
  pickVessel: (vesselName) => {
    return (dispatch) => {
      fetch(`https://allalouf-65061.firebaseio.com/allalouf/${vesselName}.json`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          var dataInfo = data.split(" ");
          dispatch(actionTypes.afterFetch(dataInfo, vesselName));
        });
    };
  },
};

export default actionTypes;
