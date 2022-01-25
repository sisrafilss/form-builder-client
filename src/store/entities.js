import { combineReducers } from "redux";

import formListReducer from "./formList";

export default combineReducers({
  formList: formListReducer,
});
