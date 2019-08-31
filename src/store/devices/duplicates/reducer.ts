import {
  duplicateActionKeys,
  DuplicateActionTypes,
  DuplicateDeviceState
} from "./types";

const initialState: DuplicateDeviceState = {
  list: []
};

function deviceReducer(state = initialState, action: DuplicateActionTypes) {
  switch (action.type) {
    case duplicateActionKeys.FETCH_REQUEST: {
    }
  }
  return state;
}

export default deviceReducer;
