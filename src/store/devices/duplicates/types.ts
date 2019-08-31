import { Device } from "../types";

export interface DuplicateDeviceState {
  list: Device[];
}

export const duplicateActionKeys = {
  FETCH_REQUEST: "@@Device/Duplicate/FETCH_REQUEST",
  FETCH_SUCCESS: "@@Device/Duplicate/FETCH_SUCCESS",
  FETCH_ERROR: "@@Device/Duplicate/FETCH_ERROR"
};

interface FetchDevicesAction {
  type: typeof duplicateActionKeys.FETCH_REQUEST;
}

export type DuplicateActionTypes = FetchDevicesAction;
