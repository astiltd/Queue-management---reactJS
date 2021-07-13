import _ from "lodash";

export default function(state = [], action) {
  switch (action.type) {
    case "LOGIN_VALIDATION":
      console.log("inside reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
}
