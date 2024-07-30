import { SEARCH_FLIGHT, UPDATE_FLIGHT } from "../constants/actionTypes";

export default (flights = [], action) => {
  switch (action.type) {
    case SEARCH_FLIGHT:
      return action.payload;
    case UPDATE_FLIGHT:
      return flights.map((flight) => (flight.flightId === action.payload.flightId ? action.payload : flight));
    default:
      return flights;
  }
};
