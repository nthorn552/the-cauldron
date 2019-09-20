import {
  CREATE_NEW_JOB,
  DEPART_USER_REQUEST,
  DEPART_USER_SUCCESS,
  JobActionTypes,
  JobsState,
  JobStatus
} from "./types";

const initialState: JobsState = {
  jobMap: {},
  activeJob: null
};

function jobsReducer(state = initialState, action: JobActionTypes) {
  switch (action.type) {
    case CREATE_NEW_JOB: {
      state.activeJob = {
        id: "TODO",
        name: "Depart User",
        status: JobStatus.PREPARING
      };
      break;
    }
    case DEPART_USER_REQUEST: {
      state.activeJob.status = JobStatus.PROCESSING;
      break;
    }
    case DEPART_USER_SUCCESS: {
      state.activeJob.status = JobStatus.COMPLETE;
      state.activeJob.output = action.payload.data;
    }
  }
  return state;
}

export default jobsReducer;
