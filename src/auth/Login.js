import React, { useState } from 'react'
import { BASE_URL } from '../utils/config';
import Cookies from 'js-cookie';
import { InfinitySpin } from 'react-loader-spinner';

const Login = ({ setShowLoginForm }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      if(response.status == 200 || response.status == 201 || response.ok) {
      const data = await response.json()
      Cookies.set("token", data.token, {expires: 1})
      setIsLoading(false)
      window.location.reload()
    } else {
      alert("Could not login, Incorrect email or password!!")
    }
    } catch (error) {
      alert(error.message)
    }

  }

  return (
    <div className="container">
      <div className='row mt-4'>
        <div className='col-4'></div>
        <div className='col-4'>
          {isLoading && <InfinitySpin
    visible={true}
    width="200"
    color="#4fa94d"
    ariaLabel="infinity-spin-loading"
     />}
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title text-center">Login Into Scheduler</h3>
            <div className="form-group mt-4">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
          <p className='text-center mt-3'>No account yet? <a href='#' onClick={() => setShowLoginForm(false)}>Register</a></p>
        </form>
        </div>
        <div className='col-4'></div>
      </div>
        
      </div>
  )
}

export default Login