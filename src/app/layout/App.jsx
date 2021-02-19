import React from 'react'
import './style.css';
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import {Container} from "semantic-ui-react";

function App() {
  return (
    <>
       <NavBar/>
        <Container className={'main'}>
            <EventDashboard/>
        </Container>

       
    </>
  );
}

export default App;
