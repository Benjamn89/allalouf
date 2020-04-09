import faunadb, { query as q } from "faunadb";

// make the db connection
var client = new faunadb.Client({
  secret: process.env.REACT_APP_API_URL,
});

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
      eta: dataInfo.eta,
      lastArrived: dataInfo.arrived,
      lastStarted: dataInfo.startOps,
      lastSailed: dataInfo.sailed,
      lastAgent: dataInfo.agent,
    };
  },
  pickVessel: (vesselName) => {
    return (dispatch) => {
      client
        .query(q.Get(q.Ref(q.Collection("Allalouf"), "262088790964699650")))
        .then((ret) => {
          var dataInfo = ret.data[vesselName];
          dispatch(actionTypes.afterFetch(dataInfo, vesselName));
        });
    };
  },
  loadSpinner: () => {
    return {
      type: "loadSpinner",
    };
  },
};

export default actionTypes;
