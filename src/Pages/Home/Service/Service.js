import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, img, price, description } = props.service

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>price: {price}</p>
            <p><small>{description}</small></p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Service;