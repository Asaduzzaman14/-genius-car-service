import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const Checkout = () => {
    const { servceId } = useParams()
    const [service] = useServiceDetail(servceId)

    const [user, setuser] = useState({
        name: 'Akbor thge grate',
        email: 'emial@email.com',
        address: 'ThijMahal Rood',
        phone: '0193333333333'
    })


    const handelDataChange = (e) => {
        console.log(e.target.value);
        const { address, ...rest } = user;
        const newAddress = e.target.value
        const newUser = { address: newAddress, ...rest }
        setuser(newUser);

    }



    return (
        <div className='w-50 mx-auto'>
            <h2>plaese Order : {service.name}</h2>
            <form>
                <input className='w-100 mb-3' value={user.name} type="text" name='Name' placeholder='Name' required />
                <br />
                <input className='w-100 mb-3' value={user.email} type="email" name='email' placeholder='email' required />
                <br />
                <input className='w-100 mb-3' value={service.name} type="text" name='service' placeholder='service' required />
                <br />
                <input onChange={handelDataChange} className='w-100 mb-3' value={user.address} type="text" name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-3' value={user.phone} type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-danger' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default Checkout;