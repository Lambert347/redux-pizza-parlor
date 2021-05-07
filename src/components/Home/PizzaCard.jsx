import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PizzaCard = ({ pizza }) => {

    const [toggled, setToggled] = useState(true);

    const dispatch = useDispatch();

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
        <div className="cardContent">
            <Card elevation={3}>
                <CardContent gutterBottom>
                    <img src={pizza.path} alt={pizza.name} />
                </CardContent>
                <CardContent style={{ backgroundColor: '#e4f2fe' }}>
                    <Typography variant="textPrimary" gutterBottom>{pizza.name}</Typography>
                    <Typography variant="textSecondary">{pizza.description} {pizza.price}</Typography>
                </CardContent>
                {toggled && <Button onClick={toggleRemoveButton}>ADD</Button>}
                {!toggled && <Button onClick={toggleRemoveButton}>REMOVE</Button>}
            </Card>
        </div>
    );
}

export default PizzaCard;