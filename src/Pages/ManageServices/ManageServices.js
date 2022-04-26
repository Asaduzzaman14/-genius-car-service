import React from 'react';
import UseServices from '../../hooks/UseServices';

const ManageServices = () => {

    const [services, setServices] = UseServices()

    const handelDelete = (id) => {
        const proceed = window.confirm('Are you sure')
        if (proceed) {

            const url = `https://limitless-brushlands-16762.herokuapp.com/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })

        }

    }

    return (
        <div className='w-50 mx-auto'>
            <h2>This is manage services page</h2>
            {
                services.map(service => <div key={services._id}>
                    <h5>{service.name} <button onClick={() => handelDelete(service._id)}>X</button> </h5>

                </div>)
            }
        </div >
    );
};

export default ManageServices;