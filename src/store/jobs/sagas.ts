import { put, takeLatest, fork } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

import {
  DEPART_USER_REQUEST,
  DEPART_USER_SUCCESS,
  DEPART_USER_ERROR,
  DepartUserRequestPayload,
  DepartUserSuccessAction
} from "./types";
import { departUserSuccess } from "./actions";

function* departUser(action: {
  type: typeof DEPART_USER_REQUEST;
  payload: DepartUserRequestPayload;
}) {
  yield axios
    .get("http://192.168.10.31:8082/scripts/o365/departUser") //TODO: use env for API location
    .then(function(resultObj: AxiosResponse<{ result: string; data: string }>) {
      console.log("success");
      put(departUserSuccess(resultObj));
    })
    .catch(function(e) {
      put({ type: DEPART_USER_ERROR, message: e.message });
    });
}

export default function* jobSagas() {
  yield takeLatest(DEPART_USER_REQUEST, departUser);
}
