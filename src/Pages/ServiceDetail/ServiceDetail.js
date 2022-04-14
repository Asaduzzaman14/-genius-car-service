import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { servceId } = useParams()
    return (
        <div className='text-center'>
            <h2 className='mt-5 mb-4'>Welcome to detail:{servceId}</h2>
            <Link to={'/checkout'}>
                <button className='btn btn-primary mb-5'>Procid Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;