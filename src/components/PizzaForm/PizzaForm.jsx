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

    

    const history = useHistory();

    const addOrder = (event) => {
        event.preventDefault();
        console.log(customer_name, street_address, city, zip, type);
        
        
        dispatchEvent({type: 'ADD_NEW_ORDER', payload: {customer_name: customer_name,
             street_address: street_address, city: city, zip: zip,
             type: type}})
        history.push('/checkout');    
    }
    
    return (
        <section>
            <h3>Enter Order Information</h3>
            <form onSubmit={addOrder}>
                <input onChange={(event) => setCustomerName(event.target.value)} type="text" placeholder="Customer Name" value={customer_name}  />
                <input onChange={(event) => setStreetAddress(event.target.value)} type="text" placeholder="Delivery Address" value={street_address}  />
                <input onChange={(event) => setCity(event.target.value)} type="text" placeholder="City" value={city}  />
                <input onChange={(event) => setZip(event.target.value)} type="text" placeholder="Zip Code" value={zip}  />
                <input onChange={(event) => setType(event.target.value)} type="text" placeholder="Order Type (Delivery or Pickup)" value={type}  />
                <button>Submit Info</button>
            </form>
        </section>
    )
}

export default PizzaForm;
