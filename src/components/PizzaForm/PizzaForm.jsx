import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaForm(){
    const [customer_name, setCustomerName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');
    
    const dispatchEvent = useDispatch();

    let [orderToAdd, setOrderToAdd] = useState({customer_name: '', street_address: '', city: '', zip: '', type: '',})

    const history = useHistory();

    const addOrder = (event) => {
        event.preventDefault();
        setOrderToAdd({
            ...orderToAdd,
            customer_name: customer_name,
            street_address: street_address,
            city: city,
            zip: zip,
            type: type,
        })
        dispatchEvent({type: 'ADD_NEW_ORDER', payload: orderToAdd})
        history.push('/checkout');    
    }

    return (
        <section>
            <h3>Enter Order Information</h3>
            <form onSubmit={addOrder}>
                <input placeholder="Customer Name" value={customer_name} onChange={(event) => setCustomerName(event.target.value)} />
                <input placeholder="Delivery Address" value={street_address} onChange={(event) => setStreetAddress(event.target.value)} />
                <input placeholder="City" value={city} onChange={(event) => setCity(event.target.value)} />
                <input placeholder="Zip Code" value={zip} onChange={(event) => setZip(event.target.value)} />
                <input placeholder="Order Type (Delivery or Pickup)" value={type} onChange={(event) => setType(event.target.value)} />
                <button>Submit Info</button>
            </form>
        </section>
    )
}

export default PizzaForm;
