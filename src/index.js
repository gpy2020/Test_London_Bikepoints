import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import mainReducer from "./mainReducer";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MapContainer from "./Containers/MapContainer";
import BikestopOnMapContainer from "./Containers/BikestopOnMapContainer";

const rootReducer = combineReducers({
  main: mainReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/map" component={MapContainer} />
        <Route
          exact
          path="/map/:bikestopID"
          component={BikestopOnMapContainer}
        />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
