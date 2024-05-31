import React, { useEffect, useState, useContext } from 'react'
import TimeSlotTable from "../slots/TimeSlotsTable"
import CreateSlot from './CreatSlot';
import { BASE_URL } from "../../utils/config";

import AuthContext from '../../context/AuthContext';


const TimeSlots2 = () => {
  const [slots, setSlots] = useState([])
  const token = useContext(AuthContext)

  useEffect(() => {
    const getSlots = async() => {
      const response = await fetch(`${BASE_URL}/slots`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      })
      const data = await response.json()
      setSlots(data.records)
    }
    getSlots()
  }, [0])

  return (
   <div>
    <CreateSlot />
    <div className="row">
      <div className="col-2"></div>
      <div className="col-sm-12 col-md-12 col-lg-8 mt-5">
        <div className='text-end'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createSlot">
  New Slot
</button>
        </div>
        
        <TimeSlotTable timeSlots={slots} />
      </div>
    </div>
  
   </div>
  )
}

export default TimeSlots2
