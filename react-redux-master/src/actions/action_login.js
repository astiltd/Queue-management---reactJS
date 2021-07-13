export function isValidUser(email, pass) {
  console.log("inside action", email);

  return {
    type: "LOGIN_VALIDATION",
    payload: "y"
  };
}
