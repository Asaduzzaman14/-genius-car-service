import axios from 'axios';
import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../fairbase.init';
import useServiceDetail from '../../hooks/useServiceDetail';

const Checkout = () => {
    const { servceId } = useParams()
    const [service] = useServiceDetail(servceId)
    const [user] = useAuthState(auth)

    if (user) {
        console.log(user);
    }



    const handelPlceOrder = (e) => {
        e.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: servceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {

                const { data } = response
                if (data.insertedId) {
                    toast('your order is book')
                    e.target.reset()
                }
            })


    }


    return (
        <div className='w-50 mx-auto'>
            <h2>plaese Order : {service.displayName}</h2>
            <form onSubmit={handelPlceOrder}>
                <input className='w-100 mb-3' value={user?.displayName} type="text" name='name' placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' value={user.email} type="email" name='email' placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' value={service.name} type="text" name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-3' value={user.address} type="text" name='address' placeholder='address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-3' value={user.phone} type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-danger' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Checkout;