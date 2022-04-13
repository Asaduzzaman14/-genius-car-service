import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password);
    }

    return (
        <div>
            <h2 className='text-center mt-5 text-primary'>Please log in</h2>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='my-2 p-auto'>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none' onClick={() => navigate('/register')}>Please Register</Link></p>
            </Form>
        </div>
    );
};

export default LogIn;