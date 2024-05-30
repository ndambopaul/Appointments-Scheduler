import React, { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext';

import { BASE_URL } from '../../utils/config';


const CreateSlot = () => {
    const token = useContext(AuthContext)
    const [formData, setFormData] = useState({
        day_name: '', 
        start_time: '', 
        end_time: '', 
        meeting_link: ''
    });

const handleSubmit = (event) => {
    event.preventDefault(); 

    console.log('Form Submitted:', formData); 

    const createASlot = async() => {
        try {
            const response = await fetch(`${BASE_URL}/slots`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data)
            window.location.reload()
        } catch (error) {
            console.log({ error: error.message })
        }
    }

    setFormData({ day_name: '', start_time: '', end_time: '', meeting_link: ''});
    createASlot()
};

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    }
  return (

<div className="modal fade" id="createSlot" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Create a Slot</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label className="form-label">Days</label>
                      <select className="form-select" id='day_name' name='day_name' onChange={handleChange}>
                          <option value="">select</option>
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                      </select>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Start time</label>
                      <select className="form-select" id='start_time' name='start_time' onChange={handleChange}>
                          <option value="">select</option>
                          <option value="7:00 AM">7:00 AM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="8:00 PM">8:00 PM</option>
                      </select>
                  </div>
                  <div className="mb-3">
                      <label className="form-label">End time</label>
                      <select className="form-select" id='end_time' name='end_time' onChange={handleChange}>
                          <option value="">select</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="10:00 PM">10:00 PM</option>
                      </select>
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Meeting Link</label>
                    <input type='text' className='form-control' id='meeting_link' name='meeting_link' onChange={handleChange} required />
                  </div>
                  <div className="col-4"></div>


                  <div className="text-center">
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
              </form>
      </div>
     
    </div>
  </div>
</div>
  )
}

export default CreateSlot