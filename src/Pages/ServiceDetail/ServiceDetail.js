import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';



const ServiceDetail = () => {

    const { servceId } = useParams()
    const [service] = useServiceDetail(servceId)


    return (
        <div className='text-center'>

            <h2 className='mt-5 mb-4'>You are about to book:{service.name} </h2>
            <h3> id:{servceId}</h3>


            <Link to={`/checkout/${servceId}`}>
                <button className='btn btn-primary mb-5'>Procid Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;