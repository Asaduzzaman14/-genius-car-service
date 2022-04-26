import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosSecreet';
import auth from '../../fairbase.init';

const Order = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email
            const url = `https://limitless-brushlands-16762.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setOrders(data)

            } catch (err) {
                console.log(err.message);
                if (err.response.status === 401 || err.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }

        }
        getOrders()
    }, [user])


    return (
        <div>
            <h2>Your Orders {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} : {order.service}</p>
                </div>)
            }

        </div>
    );
};

export default Order;