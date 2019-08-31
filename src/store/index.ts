import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {} from "redux";
import createSagaMiddleware from "redux-saga";

import sagas from "./sagas";
import devices from "./devices/reducer";
import { DevicesState } from "./devices/types";

export interface ApplicationState {
  devices: DevicesState;
}

const rootReducer = combineReducers({
  devices
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  )
);

sagaMiddleware.run(sagas);
