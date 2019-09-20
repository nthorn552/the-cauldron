import { put, takeLatest, fork } from "redux-saga/effects";
import axios from "axios";

import duplicateSagas from "./duplicates/sagas";

import { deviceActionKeys } from "./types";

function* fetchDevices(action: {
  type: typeof deviceActionKeys.FETCH_REQUEST;
}) {
  try {
    // TODO: fetch from API
    axios
      .get("http://192.168.10.31:8082/reports/rmm/duplicates")
      .then(function() {
        console.log("success");
      })
      .catch(function() {
        console.log("error");
      });
    yield put({
      type: deviceActionKeys.FETCH_SUCCESS,
      payload: []
    });
  } catch (e) {
    yield put({ type: deviceActionKeys.FETCH_ERROR, message: e.message });
  }
}

function* deviceSagas() {
  yield takeLatest(deviceActionKeys.FETCH_REQUEST, fetchDevices);
}

export default function*() {
  yield [fork(deviceSagas), fork(duplicateSagas)];
}
