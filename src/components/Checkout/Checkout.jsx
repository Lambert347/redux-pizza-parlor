import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Checkout(){
    const pizzaOrder = useSelector(store => store.orderReducer.pizzaOrder);
    const customerInfo = useSelector(store => store.orderReducer.customerInfo);
    console.log(pizzaOrder);
    console.log(customerInfo);
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = () => {
        let check = confirm("Don't forget to double check!")
        if (check == true){
            axios({
                method: 'POST',
                url: '/api/order',
                data: {
                    customer_name: customerInfo.customer_name,
                    street_address: customerInfo.street_address,
                    city: customerInfo.city,
                    zip: customerInfo.zip,
                    type: customerInfo.type,
                    total: 200,
                    pizzas: pizzaOrder
                }
            }).then( response => {
                console.log(response);    
                dispatch({type: 'COMPLETE_ORDER'})
                history.push('/');

            }).catch( error => {
                console.log('error on POST', error);
            });
        } else {
            txt = "Press Checkout when ready :)";
        }
    }




    return (
        <>
            <p>{customerInfo.customer_name}</p>
            <p>{customerInfo.street_address}</p>
            <p>{customerInfo.city}, {customerInfo.zip}</p>
            <div>{customerInfo.type}</div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                    {pizzaOrder.map((pizza) => {
                      return  <tr key={pizza.id}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>
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