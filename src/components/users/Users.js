import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/config';
import UsersTable from './UsersTable';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async() => {
            const response = await fetch(`${BASE_URL}/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            console.log(data.records)
            setUsers(data.records)
        }
        getUsers()
    }, [0])

  return (
    <div className='row m-2'>
        <UsersTable users={users} />
    </div>
  )
}

export default Users