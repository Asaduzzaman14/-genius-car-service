import React, { useRef } from 'react';
import { Button, Form } from
    'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../fairbase.init';
import Loading from './Loading/Loading';
import SocilaLogin from './SocilaLogin/SocilaLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';

const LogIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from.pathname || '/'

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let hookError;
    if (error) {
        hookError = <div>
            <p>Error: {error?.message} </p>
        </div>

    }
    if (loading || sending) {
        return <Loading></Loading>
    }


    if (user) {
        // navigate(from, { replace: true })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://limitless-brushlands-16762.herokuapp.com/login', { email })
        localStorage.setItem('accessToken', data)
        navigate(from, { replace: true })
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {

            await sendPasswordResetEmail(email)
            toast('send email')
        }
        else {
            toast('please enter your email')
        }
    }

    return (
        <div>
            <PageTitle
                title={'login'}
            ></PageTitle>

            <h2 className='text-center mt-5 text-primary'>Please log in</h2>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto mt-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{hookError}</p>


                <Button variant="primary" type="submit">
                    LogIn
                </Button>

                <p className='my-2 p-auto'>New to Genius Car? <Link to='/register' className='text-primary text-decoration-none' onClick={() => navigate('/register')}>Please Register</Link></p>
                <p className='my-2 p-auto'>Forgete password ? <button className='btn btn-link text-primary text-decoration-none' onClick={() => resetPassword()}>Resate password</button></p>
                <SocilaLogin></SocilaLogin>
            </Form>
            <p>{hookError}</p>

        </div>
    );
};

export default LogIn;