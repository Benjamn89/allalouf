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
      lastArrived: dataInfo.last,
      lastStarted: dataInfo.start,
      lastSailed: dataInfo.sailed,
      lastAgent: dataInfo.agent,
    };
  },
  pickVessel: (vesselName) => {
    return (dispatch) => {
      client
        .query(q.Get(q.Match(q.Index("vessel"), vesselName)))

        .then((ret) => {
          dispatch(actionTypes.afterFetch(ret.data, vesselName));
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
