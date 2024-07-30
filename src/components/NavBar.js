import React from 'react';
import { useSelector } from 'react-redux';
import plane from '../assets/plane.png';
import '../styles/NavBar.css';

const NavBar = () => {
  const isAdmin = useSelector((state) => state.isAdmin);
  const handleLoginClick = () => {
    // setLoginFormVisible(true);
  };

  return (
    <header className="header">
      <div className="left-section">
        <img src={plane} alt="Plane" className="plane-icon" />
        <h1 className="flight-status">Flight Status</h1>
      </div>
      <button className="login" onClick={handleLoginClick}>
        {isAdmin ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default NavBar;
