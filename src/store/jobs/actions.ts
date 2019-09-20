import { AxiosResponse } from "axios";
import {
  DEPART_USER_REQUEST,
  DEPART_USER_SUCCESS,
  DepartUserSuccessPayload,
  DepartUserRequestPayload,
  DepartUserRequestAction,
  DepartUserSuccessAction
} from "./types";

export function departUser(
  payload: DepartUserRequestPayload
): DepartUserRequestAction {
  return { type: DEPART_USER_REQUEST, payload };
}

export function departUserSuccess(
  payload: AxiosResponse<{ result: string; data: string }>
): DepartUserSuccessAction {
  return {
    type: DEPART_USER_SUCCESS,
    payload: { result: payload.data.result, data: payload.data.data }
  };
}
