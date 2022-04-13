import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const handelfromSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }




    return (
        <div>
            <h2 className='form-title text-primary'>Please Register</h2>
            <form onSubmit={handelfromSubmit} className='register-from'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='your name' />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='' placeholder='your email' required />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='' placeholder='password' required />
                <br />

                <input type="submit" value='register' />
                <p className='my-2 p-auto'>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={() => navigate('/login')}>Please logIn</Link></p>
            </form>
        </div>
    );
};

export default Register;