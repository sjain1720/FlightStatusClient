import React from "react";
import FlightSearchForm from "./components/FlightSearchForm";
import ShowFlights from "./components/ShowFlights";
import { Container } from "@mui/material";
import './App.css';
import NavBar from "./components/NavBAr";

const App = () => {
  return(
    <>
      <NavBar className="header"/>
      <Container maxWidth="lg">
        <FlightSearchForm className="flight-search-form"/>
        <ShowFlights/>
      </Container>
    </>
  );
};

export default App;
