import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

function Checkout(){
    const order = useSelector(store => store.order);
    const dispatch = useDispatch();
    const onSubmit = () => {
        let check = confirm("Don't forget to double check!")
        if (check == true){
            axios({
                method: 'POST',
                url: '/api/order',
                data: {
                    customer_name: order.customer_name,
                    street_address: order.street_address,
                    city: order.city,
                    zip: order.zip,
                    type: order.type,
                    total: order.total,
                    pizzas: order.pizzas
                }
            }).then( response => {
                console.log(response);    
                dispatch({type: 'COMPLETE_ORDER'})


            }).catch( error => {
                console.log('error on POST', error);
            });
        } else {
            txt = "Press Checkout when ready :)";
        }
    }




    return (
        <>
            <p>{order.customer_name}</p>
            <p>{order.street_address}</p>
            <p>{order.city}, {order.zip}</p>
            <div>{order.type}</div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                    {order.pizzas.map((pizza, i) => {
                    <>
                    <tr key={i}>
                        <td>{pizza.pizza}</td>
                    </tr>
                    <tr key={i}>
                        <td>{pizza.cost}</td>
                    </tr>
                    </>
                    })}
                </tbody>
            </table>
            <div>Total:{customerInfo.total}</div>
            <form onSubmit={onSubmit}>
                <button>Checkout</button>
            </form>

        </>
    );
}

export default Checkout;