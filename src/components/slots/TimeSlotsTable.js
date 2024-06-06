import React from 'react';

function TimeSlotTable({ timeSlots = [] }) {
    return (
        <>
        <table className="table table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Day</th>
                    <th>Created By</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {timeSlots.map((slot, index) => {  
                        return <tr key={slot._id}>
                            <td>{index + 1}</td>
                            <td>{slot.day_name}</td>
                            <td>{slot.creator.first_name} {slot.creator.last_name}</td>
                            <td>{slot.start_time}</td>
                            <td>{slot.end_time}</td>
                            <td>
                                {slot.booking_status === "booked" ? (<p className="fw-bold text-danger">Booked</p>) : (
                                    <a href={`/slots/${slot._id}`} className='btn btn-info btn-sm'><i className="bi bi-eye"></i></a>
                                )}
                                
                            </td>
                      </tr>
                    })}
                </tbody>
        </table>
        </>
    );
}

export default TimeSlotTable;
