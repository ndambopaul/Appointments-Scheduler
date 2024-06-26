import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import BookingModal from "../bookings/BookingModal"

import AuthContext from "../../context/AuthContext";

import { BASE_URL } from "../../utils/config";

const SlotDetail2 = () => {
  const { id } = useParams();
  const [slot, setSlot] = useState({});

  const token = useContext(AuthContext)

  useEffect(() => {
    const getSlot = async () => {
      const response = await fetch(`${BASE_URL}/slots/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      setSlot(data.slot);
    };
    getSlot();
  }, [id]);

  console.log(slot);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card mt-5">
            <div className="card-header"><h5 className="card-title">Book A Slot</h5></div>
            <div className="card-body">
              <h5>Day: {slot.day_name}</h5>
              <p className="card-text">
                <p>Starts at: {slot.start_time}</p>
                <p>Ends at: {slot.end_time}</p>
              </p>
              <BookingModal slotId={slot._id} />
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default SlotDetail2;
