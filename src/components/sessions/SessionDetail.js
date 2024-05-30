import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from "../../utils/config"

import AuthContext from '../../context/AuthContext';

import JoinSession from './JoinSession';
import LeaveSession from './LeaveSession';


import dayjs from 'dayjs';


const SessionDetail = () => {
    const token = useContext(AuthContext)
    const { id } = useParams()


    const [session, setSession] = useState({})
    const [people, setPeople] = useState([])
    
    console.log({ id: id })

    useEffect(() => {
        const getSession = async() => {
            const response = await fetch(`${BASE_URL}/bookings/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            })
            const data = await response.json()
            setSession(data)
        }
        getSession()
    }, [id])

    const formattedDate = dayjs(session.session_date).format('YYYY-MM-DD')
    console.log(formattedDate)

    useEffect(() => {
        const getStudentsInSession = async() => {
            const response = await fetch(`${BASE_URL}/sessions/students-in-session/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            })
            const data = await response.json()
            console.log(data.records)
            setPeople(data.records)
        }
        getStudentsInSession();
    }, [id])

  return (
    <>
    <JoinSession title={session.title} session_date={formattedDate} user={token} session_id={session._id} />
    <LeaveSession title={session.title} session_date={formattedDate} user={token} session_id={session._id}/>
    <div className='row m-2'>
        <div className='col-sm-12 col-md-4 col-lg-4'>
        <div className="card mt-5">
            <div className="card-header">{session.title}</div>
            <div className="card-body">
              <p className="card-text">
                {session.description}
              </p>
              <p className='card-text'>
                Date: {dayjs(session.session_date).format("YYYY-MM-DD")}
              </p>
            </div>
            <div className='m-3 d-flex justify-content-center'>
                <button className='btn btn-primary btn-sm mx-2'><i class="bi bi-pencil-square"></i></button>
                <button className='btn btn-success btn-sm mx-2' data-bs-toggle="modal" data-bs-target="#joinSession"><i className="bi bi-box-arrow-in-left"></i></button>
                <button className='btn btn-danger btn-sm mx-2' data-bs-toggle="modal" data-bs-target="#leaveSession"><i className="bi bi-box-arrow-in-right"></i></button>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6'>
        <h5 className='text-center'>Participants</h5>
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {people.map((person, index) => {
                    return <tr key={person._id}>
                        <td>{index + 1}</td>
                        <td>{person.user.first_name} {person.user.last_name}</td>
                        <td>{person.user.phone_number}</td>
                        <td>{person.user.email}</td>
                        <td>
                            <a href='' className='btn btn-danger btn-sm'><i className="bi bi-person-x"></i></a>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    </div>
    
    </>
  )
}

export default SessionDetail