import { SET_ADMIN } from "../constants/actionTypes";

export default (isAdmin = false, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return isAdmin=action.payload;
    default:
      return isAdmin;
  }
};
