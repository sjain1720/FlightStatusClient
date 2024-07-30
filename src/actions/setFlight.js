import { UPDATE_FLIGHT } from "../constants/actionTypes";
import { updateFlight } from "../api";

const setFlight = (flight) => async (dispatch) => {
    try {
      const { data } = await updateFlight(flight.flightId, flight);
  
      dispatch({ type: UPDATE_FLIGHT, payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export default setFlight;
