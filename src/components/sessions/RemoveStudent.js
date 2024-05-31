import React from 'react'

const RemoveStudent = () => {
  return (
    <div className="modal fade" id="removeStudent" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Chill, you can't remove someone from session yet 😅</p>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default RemoveStudent