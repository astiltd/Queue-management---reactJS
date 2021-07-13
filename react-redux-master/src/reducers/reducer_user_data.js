import _ from "lodash";

export default function(state = [], action) {
  switch (action.type) {
    case "USER_DATA":
      console.log(action.payload);
      return _.mapKeys(action.payload, "phone");
    default:
      return state;
  }
}
