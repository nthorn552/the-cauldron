import { fork } from "redux-saga/effects";

import deviceSagas from "./devices/sagas";

export default function* rootSaga() {
  yield [fork(deviceSagas)];
}
