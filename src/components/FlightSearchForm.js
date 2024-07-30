import React, { useState } from 'react';
import getFlights from '../actions/getFlights';
import { useDispatch } from 'react-redux';
import '../styles/FlightSearchForm.css';

const FlightSearchForm = () => {
    const dispatch = useDispatch();
    const today = new Date().toISOString().split('T')[0];

    const loadSavedState = () => {
        const savedState = localStorage.getItem('searchParams');
        return savedState ? JSON.parse(savedState) : {
            departureDate: '',
            flightNumber: '',
            from: '',
            to: '',
            flightId: ''
        };
    };

    const [searchParams, setSearchParams] = useState(loadSavedState);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('searchParams', JSON.stringify(searchParams));
        dispatch(getFlights(searchParams));
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <input
                type="date"
                name="departureDate"
                placeholder="dd-mm-yyyy"
                value={searchParams.departureDate}
                min={today}
                onChange={handleChange}
            />
            <input
                type="text"
                name="flightNumber"
                placeholder="Flight Number"
                value={searchParams.flightNumber}
                onChange={handleChange}
            />
            <input
                type="text"
                name="from"
                placeholder="From"
                value={searchParams.from}
                onChange={handleChange}
            />
            <input
                type="text"
                name="to"
                placeholder="To"
                value={searchParams.to}
                onChange={handleChange}
            />
            <input
                type="text"
                name="flightId"
                placeholder="Flight ID"
                value={searchParams.flightId}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default FlightSearchForm;
