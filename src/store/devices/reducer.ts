import { deviceActionKeys, DeviceActionTypes, DevicesState } from "./types";

const initialState: DevicesState = {
  list: [
    {
      id: "test",
      uid: "test",
      creationDate: 0,
      deleted: false,
      description: "test",
      deviceClass: "device",
      intIpAddress: "test",
      lastLoggedInUser: "test",
      online: true,
      operatingSystem: "test",
      siteName: "test",
      siteUid: "test"
    },
    {
      id: "test2",
      uid: "test2",
      creationDate: 0,
      deleted: false,
      description: "test2",
      deviceClass: "device",
      intIpAddress: "test2",
      lastLoggedInUser: "test2",
      online: true,
      operatingSystem: "test",
      siteName: "test2",
      siteUid: "test2"
    }
  ]
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
