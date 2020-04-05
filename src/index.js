import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//import css styles
import "./index.css";
import App from "./App";

// import reducers
import displaySearchMethod from "./REDUCERS/displaySearchMethod";
import showTheResBox from "./REDUCERS/showTheResBox";

const rootReducer = combineReducers({
  displaySearchMethod,
  showTheResBox,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
