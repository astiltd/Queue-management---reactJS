import { combineReducers } from "redux";
import Counter from "./reducer_counter";
import UserData from "./reducer_user_data";
import LoginData from "./reducer_login_data";

const rootReducer = combineReducers({
  counter: Counter,
  userData: UserData,
  loginData: LoginData
});

export default rootReducer;
