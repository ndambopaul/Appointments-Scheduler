import React, { useContext, useEffect, useState } from 'react';
import SessionsTable from './SessionsTable';
import { BASE_URL } from '../../utils/config';
import { InfinitySpin } from 'react-loader-spinner';


import AuthContext from '../../context/AuthContext';

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const token = useContext(AuthContext);

  console.log({ token: token })

  useEffect(() => {
    setIsLoading(true)
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
      setIsLoading(false)
    }
    getBookings()
  }, [token])

  return (
    <div className='row mt-3 ml-2'>
      <div className='col-1'></div>
      <div className='col-sm-12 col-md-12 col-lg-10'>
        <h4 className='text-center'>Scheduled Sessions </h4>
        <hr/>
        {isLoading ? (<InfinitySpin
    visible={true}
    width="200"
    color="#4fa94d"
    ariaLabel="infinity-spin-loading"
     />) : (<SessionsTable sessions={sessions} />)}
        
        </div>
    </div>
  )
}

export default Sessions