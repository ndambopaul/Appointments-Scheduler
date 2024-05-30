import React, { useState } from 'react'
import Login from './Login'
import RegistrationForm from './RegistrationForm'


const Authenticate = () => {
    const [showLoginForm, setShowLoginForm] = useState(true)
  return (
    <>
    {showLoginForm ? <Login setShowLoginForm={setShowLoginForm} /> : <RegistrationForm setShowLoginForm={setShowLoginForm} />}
    </>
  )
}

export default Authenticate