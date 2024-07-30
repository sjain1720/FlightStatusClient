import axios from 'axios';

const url = 'http://localhost:5432/flights';

export const fetchFlights = (searchParams) => axios.get(url, searchParams);
export const updateFlight = (id, updatedFlight) => axios.patch(`${url}/${id}`, updatedFlight);
