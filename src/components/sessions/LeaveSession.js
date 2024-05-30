import React from 'react'
import { BASE_URL } from '../../utils/config'

const LeaveSession = ({ title, session_date, user, session_id }) => {
  const handleLeaveSession = async() => {

    try {
      const response = await fetch(`${BASE_URL}/sessions/leave-session/${session_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": user
        }
      })
       if(response.status === 200 || response.status == 201 || response.ok) {
        window.location.reload()
       }
    } catch (error) {
      alert(error.message)
    }
  
  }
  return (
    <div className="modal fade" id="leaveSession" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Leave Session</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to leave <b>{title}</b> session happening <b>{session_date}</b> </p>
        </div>
        <div className='text-center'>
              <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">No, Close</button>
              <button type="submit" className="btn btn-danger" onClick={handleLeaveSession}>Yes, Leave</button>
              </div>
      </div>
    </div>
  </div>
  )
}

export default LeaveSession