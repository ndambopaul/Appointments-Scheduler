import React, { useState } from 'react'

const ModifySession = ({ session_title, session_date, session_id }) => {
    const handleSubmit = (e) => {
        console.log("Form Submitted")
        window.location.reload()
    }
  return (
    <div className="modal fade" id="modifySession" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modify Session</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <p>Title: <b>{session_title}</b></p>
            <p>Session Date: <b>{session_date}</b></p>
            <form onSubmit={handleSubmit}>
                <label className='form-label fw-bold'>I am?</label>
                <select className='form-select'>
                    <option value=""></option>
                    <option value="cancel">Cancelling the Session</option>
                    <option value="delete">Deleting the Session</option>
                    <option value="done">Marking Session as Done</option>
                </select>
            </form>
        </div>
        <div className='text-center'>
              <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">No, Close</button>
              <button type="submit" className="btn btn-success">Yes, Modify</button>
              </div>
      </div>
    </div>
  </div>
  )
}

export default ModifySession