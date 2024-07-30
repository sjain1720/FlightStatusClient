import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import planeImage from '../assets/plane.png';
import '../styles/ShowFlight.css';

const ShowFlight = ({ flight }) => {
  const isAdmin = useSelector((state) => state.isAdmin);
  const getStatus = (addArrTime) => {
    if (addArrTime === 0) return 'On Time';
    return addArrTime < 0 ? 'Early' : 'Delayed';
  };

  const calculateUpdatedDateTime = (date, time, additionalTime) => {
    const [hours, minutes] = time.split(':').map(Number);
    const addHours = Math.floor(additionalTime / 60);
    const addMinutes = additionalTime % 60; 

    const totalMinutes = (hours * 60 + minutes + addHours * 60 + addMinutes);
    const updatedHours = Math.floor(totalMinutes / 60) % 24;
    const updatedMinutes = totalMinutes % 60;

    const dateObj = new Date(date);
    if (Math.floor(totalMinutes / 60) >= 24) {
      dateObj.setDate(dateObj.getDate() + 1);
    }

    const updatedDate = dateObj.toISOString().split('T')[0];
    const updatedTime = `${String(updatedHours).padStart(2, '0')}:${String(updatedMinutes).padStart(2, '0')}`;

    return { updatedDate, updatedTime };
  };

  const { updatedDate: updatedDepartureDate, updatedTime: updatedDepartureTime } = calculateUpdatedDateTime(
    flight.departure_date,
    flight.departure_time,
    flight.add_dept_time
  );

  const { updatedDate: updatedArrivalDate, updatedTime: updatedArrivalTime } = calculateUpdatedDateTime(
    flight.arrival_date,
    flight.arrival_time,
    flight.add_arr_time
  );

  return (
    <div className="show-flight">
      <header className="show-flight-header">
        <div className="header-left">
          <img src={planeImage} alt="plane" className="plane-icon" />
          <span className="flight-status">{getStatus(flight.add_arr_time)}</span>
        </div>
        {isAdmin && <FontAwesomeIcon icon={faEdit} className="edit-icon" />}
      </header>
      <div className="show-flight-middle">
        <div className="middle-column">
          <div>From</div>
          <div>{flight.departure_city}</div>
          <div>To</div>
          <div>{flight.arrival_city}</div>
        </div>
        <div className="middle-column">
          <div>
            <span>{flight.add_dept_time ? <s>{flight.departure_date}</s> : flight.departure_date}</span>
            {flight.add_dept_time && <span> {updatedDepartureDate}</span>}
          </div>
          <div>
            <span>{flight.add_dept_time ? <s>{flight.departure_time}</s> : flight.departure_time}</span>
            {flight.add_dept_time && <span> {updatedDepartureTime}</span>}
          </div>
          <div>
            <span>{flight.add_arr_time ? <s>{flight.arrival_date}</s> : flight.arrival_date}</span>
            {flight.add_arr_time && <span> {updatedArrivalDate}</span>}
          </div>
          <div>
            <span>{flight.add_arr_time ? <s>{flight.arrival_time}</s> : flight.arrival_time}</span>
            {flight.add_arr_time && <span> {updatedArrivalTime}</span>}
          </div>
        </div>
      </div>
      <footer className="show-flight-footer">
        <div className="footer-column">
          <span>Flight Number: {flight.flight_no}</span>
        </div>
        <div className="footer-column">
          <span>Gate: {flight.updated_gate_no ? <s>{flight.gate_no}</s> : flight.gate_no}</span>
          {flight.updated_gate_no && <span> ({flight.updated_gate_no})</span>}
        </div>
      </footer>
    </div>
  );
};

export default ShowFlight;
