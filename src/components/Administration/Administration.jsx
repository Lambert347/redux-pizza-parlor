import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Administration(){

    useEffect(() => {
        getOrders()
    }, []);

    const orders = useSelector(store => store.orderReducer);
    //const [orders, setOrders] = useState([]);

    const getOrders = () => {
        axios.get('/api/order')
        .then((response) => {
            setOrders(response.data);
        })
        .catch((error) => {
            console.log('error in Admin get', error);
        });
    }

    return(
        <>
            <header className="admin-header">
                <h1>Prime Pizza Orders</h1>
            </header>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Time Order Placed</td>
                        <td>Type</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, i) =>
                        <tr key={i}>
                            <td>{item.customer_name}</td>
                            <td>{item.time}</td>
                            <td>{item.type}</td>
                            <td>{item.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Administration;

// {airlineList.map((item, i) => 
//     <tr key={i}>
//         <td>{item.airline}</td>
//         <td>{item.count}</td>
//     </tr>
// )}

{/* <tr>
    {orderList.map((item, i) =>
        <td>{item.customer_name}</td>
        <td>{item.time}</td>
        <td>{item.type}</td>
        <td>{item.total}</td>
    )}
</tr> */}

// {orders.map( item => {
//     return (
//     <>
//     <tr key={item.id}>
//         <td>{item.customer_name}</td>
//         <td>{item.time}</td>
//         <td>{order.type}</td>
//         <td>{order.total}</td> 
//     </tr>
//     </>
//     )
// })}


    