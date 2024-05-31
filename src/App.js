import React, { useContext } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Slots Imports
import TimeSlots from "./components/slots/TimeSlots"
import SlotDetail from './components/slots/SlotDetail';

// Context Import s
import AuthContext from './context/AuthContext';

// Session Imports
import Sessions from './components/sessions/Sessions';
import SessionDetail from './components/sessions/SessionDetail';


import Wrapper from './wrapper/Wrapper';
import Authenticate from './auth/Authenticate';


function App() {
  const token = useContext(AuthContext)

  return (
    <>
    {token ? (
      <Wrapper>
      <Router>
        <Routes>
          <Route path="/" exact element={<TimeSlots />} />
          <Route path="/slots/:id" element={<SlotDetail />} />
          <Route path='/sessions' element={<Sessions />} />
          <Route path='/bookings' element={<Sessions />} />
          <Route path='/sessions/:id' element={<SessionDetail />} />
          
        </Routes>
      </Router>    
    </Wrapper>
    ) : (<Authenticate />)}
    </>
  );
}

export default App;

