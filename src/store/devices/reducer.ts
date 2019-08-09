import { Device, deviceActionKeys, DeviceActionTypes } from "./types";

export interface State {
  devices: Device[];
}

const initialState: State = {
  devices: []
};

function deviceReducer(state = initialState, action: DeviceActionTypes) {
  switch (action.type) {
    case deviceActionKeys.FETCH_REQUEST: {
    }
    case deviceActionKeys.SET_FOCUS: {
    }
  }
  return state;
}

export default deviceReducer;
