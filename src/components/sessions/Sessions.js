import React, { useContext, useEffect, useState } from 'react';
import SessionsTable from './SessionsTable';
import { BASE_URL } from '../../utils/config';


import AuthContext from '../../context/AuthContext';

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const token = useContext(AuthContext);

  console.log({ token: token })

  useEffect(() => {
    const getBookings = async() => {
      const response = await fetch(`${BASE_URL}/bookings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      })
      const data = await response.json()
      setSessions(data.records)
    }
    getBookings()
  }, [token])

  return (
    <div className='row mt-3 ml-2'>
      <div className='col-2'></div>
      <div className='col-sm-12 col-md-12 col-lg-8'>
        <SessionsTable sessions={sessions} />
        </div>
    </div>
  )
}

export default Sessions