export enum JobStatus {
  PREPARING,
  PROCESSING,
  COMPLETE
}

export type Job = {
  id: string;
  name: string;
  status: JobStatus;
  output?: string;
};

/*----- STATE -----*/

export interface JobsState {
  jobMap: { [id: string]: Job };
  activeJob: Job;
}

/*----- ACTIONS -----*/

export const CREATE_NEW_JOB = "@@Job/CREATE_NEW_JOB";
export const DEPART_USER_REQUEST = "@@Job/DEPART_USER_REQUEST";
export const DEPART_USER_SUCCESS = "@@Job/DEPART_USER_SUCCESS";
export const DEPART_USER_ERROR = "@@Job/DEPART_USER_ERROR";

export interface CreateNewJobAction {
  type: typeof CREATE_NEW_JOB;
  payload: null; //TODO: Jobs will have params later
}

export interface DepartUserRequestPayload {
  adminUsername: string;
  adminPassword: string;
  targetUsername: string;
  newPassword: string;
  shouldLockAccount: boolean;
}
export interface DepartUserRequestAction {
  type: typeof DEPART_USER_REQUEST;
  payload: DepartUserRequestPayload;
}

export interface DepartUserSuccessPayload {
  result: string;
  data: string;
}
export interface DepartUserSuccessAction {
  type: typeof DEPART_USER_SUCCESS;
  payload: DepartUserSuccessPayload;
}

export type JobActionTypes =
  | CreateNewJobAction
  | DepartUserRequestAction
  | DepartUserSuccessAction;
