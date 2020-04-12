import { combineReducers } from "redux";
import reducer from "./jwt/reducer";

export default combineReducers({
  jwt: reducer,
  
});