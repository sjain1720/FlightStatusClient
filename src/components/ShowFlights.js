import React from 'react';
import { useSelector } from 'react-redux';
import ShowFlight from './ShowFlight';

const ShowFlights = () => {
  const flights = useSelector((state) => state.flights);

  return (
    !flights.length ? (<>No results found</>) : (
      <>
        {flights.map((flight) => (
          <ShowFlight flight={flight} />
        ))}
      </>
    )
  );
};

export default ShowFlights;
