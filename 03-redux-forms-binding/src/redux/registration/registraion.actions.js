import {REGISTER_USER} from "./registration.actionTypes";

let registerUser = (user) => {
  return {
      type : REGISTER_USER,
      payload : user
  }
};
export {registerUser};
