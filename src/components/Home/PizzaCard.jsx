import { useDispatch } from 'react-redux';
import { useState } from 'react';

const PizzaCard = ({pizza}) => {

    const [toggled, setToggled] = useState(true);

    const dispatch = useDispatch();

    const toggleRemoveButton = () => {
        setToggled(!toggled);
        console.log('clicked toggle button!');

        if(toggled) {
            addPizza();
        } 
        if(!toggled) {
            removePizza();
        }
    }

    const addPizza = () => {
        console.log('clicked addPizza!');
        // !!! TO-DO  !!
        // dispatch pizza to the store, hold pizzas added in an array.
    }

    const removePizza = () => {
        console.log('clicked removePizza!');
    }

    const next = () => {
        console.log('clicked next');
    }

    return (  
        <>
        <div className="cardContent">
            <img src={pizza.path} alt={pizza.name}/>
            <h3>{pizza.name}</h3>
            <p>{pizza.description} {pizza.price}</p>
            {toggled && <button onClick={toggleRemoveButton}>ADD</button>}
            {!toggled && <button onClick={toggleRemoveButton}>REMOVE</button>}
        </div>
        <div>
            <button onClick={next}>Next</button>
        </div>
        </>
    );
}
 
export default PizzaCard;