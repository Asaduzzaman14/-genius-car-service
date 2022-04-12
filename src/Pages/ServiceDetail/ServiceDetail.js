import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { servceId } = useParams()
    return (
        <div>
            <h2>Welcome to detail:{servceId}</h2>
        </div>
    );
};

export default ServiceDetail;