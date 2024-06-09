import React from 'react'

const UsersTable = ({ users }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Username</th>
          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.first_name} {user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>{user.username}</td>
            <td>{user.created_at}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default UsersTable