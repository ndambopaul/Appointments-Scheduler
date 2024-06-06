import React, {useState, useContext} from "react";
import { BASE_URL } from "../../utils/config";
import AuthContext from "../../context/AuthContext";

const BookingForm = ({ slotId }) => {
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [sessionDate, setDate] = useState(null);
  

  const token = useContext(AuthContext);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const record = {
          title: title,
          description: desc,
          session_date: sessionDate,
          slot: slotId
      }
      console.log(record)

      const createItem = async() => {
          try {
              const response = await fetch(`${BASE_URL}/bookings`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `${token}`
                  },
                  body: JSON.stringify(record)
              })
              if(response.ok) {
                  window.location.replace("/")
                  console.log("Do nothing!!")
              } else {
                  alert("Something Went Wrong!!")
              }
              
          } catch (error) {
              console.log(error.message)
          }
      }
      createItem()
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Topic of the session"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingInput">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="Date of the session"
            value={sessionDate}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="floatingInput">Session Date</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Brief Description of the topic"
            id="floatingTextarea"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Description</label>
        </div>
        
        <button type="submit" className="btn btn-primary mt-3 ">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
