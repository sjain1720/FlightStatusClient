import { SET_ADMIN } from "../constants/actionTypes";

const setAdmin = (data) => {
    dispatch({ type: SET_ADMIN, payload: data });
};

export default setAdmin;
