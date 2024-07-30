import { SEARCH_FLIGHT } from "../constants/actionTypes";
import { fetchFlights } from "../api";

const getFlights = (searchParams) => async (dispatch) => {
    try {
      const { data } = await fetchFlights(searchParams);
  
      dispatch({ type: SEARCH_FLIGHT, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export default getFlights;
