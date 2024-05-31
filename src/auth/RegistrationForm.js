import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

const RegistrationForm = ({ setShowLoginForm }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, formData);
            console.log('Registration successful:', response.data);
            console.log('Registration successful');
            window.location.replace("/")
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            console.log('Registration failed');
            
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
        <div className='text-center'>
        <h2>Sign Up</h2>
        </div>
        
            <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
            <div className="col">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
                <div className='row mb-2'>
                <div className="col">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                </div>
            <div className='row mb-2'>
            <div className="col">
                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
                <div className ="text-center mt-3">
                   <button type="submit" className="btn btn-primary">Register</button>
                </div>
                <p className='text-center'>Already have an account? <a href='#' onClick={() => setShowLoginForm(true)}>Login</a></p>
            </form>

        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"></div>
    </div>
</div>
    );
}
export default RegistrationForm;
