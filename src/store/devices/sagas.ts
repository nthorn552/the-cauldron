import { put, takeLatest, fork } from "redux-saga/effects";

import duplicateSagas from "./duplicates/sagas";

import { deviceActionKeys } from "./types";

// worker Saga: will be fired on GET_CARDS_REQUESTED actions
function* fetchDevices(action: {
  type: typeof deviceActionKeys.FETCH_REQUEST;
}) {
  try {
    // TODO: fetch from API
    yield put({
      type: "FETCH_DEVICES_SUCCESS",
      payload: []
    });
  } catch (e) {
    yield put({ type: "FETCH_DEVICES_ERROR", message: e.message });
  }
}

function* deviceSagas() {
  yield takeLatest(deviceActionKeys.FETCH_REQUEST, fetchDevices);
}

export default function*() {
  yield [fork(deviceSagas), fork(duplicateSagas)];
}
