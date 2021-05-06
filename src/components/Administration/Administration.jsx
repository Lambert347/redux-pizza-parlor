import {useSelector} from 'react-redux';

function Administration(){

    const orderList = useSelector(store => store.orderReducer);
    
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
                    {orderList.map((item, i) =>
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


    