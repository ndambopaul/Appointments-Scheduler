import React from 'react';
import dayjs from 'dayjs';

const SessionsTable = ({ sessions }) => {
  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Slot Booked</th>
                <th>Created By.</th>
                <th>Session Date</th>
                <th>Created On</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {sessions.map((session, index) => {
                return <tr key={session._id}>
                    <td>{index + 1}</td>
                    <td>{session.title}</td>
                    <td>{session.slot.day_name} (<b>{session.slot.start_time} - {session.slot.end_time}</b>)</td>
                    <td>{session.creator.first_name} {session.creator.last_name}</td>
                    <td>{dayjs(session.session_date).format("YYYY-MM-DD")}</td>
                    <td>{dayjs(session.created_at).format("YYYY-MM-DD")}</td>
                    <td>
                        <a href={`/sessions/${session._id}`} className='btn btn-info btn-sm'><i className="bi bi-eye"></i></a>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    </>
  )
}

export default SessionsTable