import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosSecreet';
import auth from '../../fairbase.init';

const Order = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuthState()

    const navigate = useNavigate()
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email
            const url = `http://localhost:5000/order?email=${email}s`
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

        </div>
    );
};

export default Order;