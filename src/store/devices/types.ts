export type Device = {
  id: string;
  uid: string;
  creationDate: 0;
  deleted: boolean;
  description: string;
  deviceClass: "device";
  intIpAddress: string;
  lastLoggedInUser: string;
  online: boolean;
  operatingSystem: string;
  siteName: string;
  siteUid: string;
};

export interface DevicesState {
  list: Device[];
}

export const deviceActionKeys = {
  FETCH_REQUEST: "@@Device/FETCH_REQUEST",
  FETCH_SUCCESS: "@@Device/FETCH_SUCCESS",
  FETCH_ERROR: "@@Device/FETCH_ERROR",
  SET_FOCUS: "@@Device/SET_FOCUS"
};

interface FetchDevicesAction {
  type: typeof deviceActionKeys.FETCH_REQUEST;
}

interface SetFocusAction {
  type: typeof deviceActionKeys.SET_FOCUS;
  payload: Device;
}

export type DeviceActionTypes = FetchDevicesAction | SetFocusAction;
