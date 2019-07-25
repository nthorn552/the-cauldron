import { combineReducers } from "redux";

import dashboard from "./dashboard";
import shmac from "./shmac";
import billing from "./billing";

const rootReducer = combineReducers({
  dashboard,
  shmac,
  billing
});

export default rootReducer;
