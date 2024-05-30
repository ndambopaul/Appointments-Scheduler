import React from "react";
import BookingForm from "./BookingForm";

const BookNow = ({ day_name }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#bookingModal"
      >
        Book Now
      </button>

      <div
        className="modal fade"
        id="bookingModal"
        tabIndex="-1"
        aria-labelledby="bookingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="bookingModalLabel">
                Fill in session details here.
                
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <BookingForm />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
