import { put, call, takeLatest } from "redux-saga/effects";
import { duplicateActionKeys } from "./types";

function* fetchDuplicates(action: {
  type: typeof duplicateActionKeys.FETCH_REQUEST;
  payload: string[];
}) {
  try {
    // TODO: fetch from API
    // TEMP: faking first card

    const response = yield call(fetch, "https://api.service.com/endpoint");
    yield put({
      type: "FETCH_DEVICES_SUCCESS",
      payload: action.payload
    });
  } catch (e) {
    yield put({ type: "FETCH_DEVICES_ERROR", message: e.message });
  }
}

export default function* duplicatesSaga() {
  yield takeLatest(duplicateActionKeys.FETCH_REQUEST, fetchDuplicates);
}
