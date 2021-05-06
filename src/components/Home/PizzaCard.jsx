import { useDispatch } from 'react-redux';
import { useState } from 'react';

const PizzaCard = ({ pizza }) => {

    const [toggled, setToggled] = useState(true);

    const dispatch = useDispatch();

    const [pizzaState, setPizzaState] = useState([]);

    const toggleRemoveButton = () => {
        setToggled(!toggled);
        console.log('clicked toggle button!');

        if (toggled) {
            addPizza();
        }
        if (!toggled) {
            removePizza();
        }
    }

    const addPizza = () => {
        console.log('clicked addPizza!');
        // !!! TO-DO  !!
        // dispatch pizza to the store, hold pizzas added in an array.
        dispatch({ type: 'ADD_PIZZA', payload: pizza })
    }

    const removePizza = () => {
        console.log('clicked removePizza!');
        dispatch({ type: 'REMOVE_PIZZA', payload: pizza })
    }

    return (
        <>
            <div className="cardContent">
                <img src={pizza.path} alt={pizza.name} />
                <h3>{pizza.name}</h3>
                <p>{pizza.description} {pizza.price}</p>
                {toggled && <button onClick={toggleRemoveButton}>ADD</button>}
                {!toggled && <button onClick={toggleRemoveButton}>REMOVE</button>}
            </div>
        </>
    );
}

export default PizzaCard;