import { useSelector } from 'react-redux';
import PizzaCard from './PizzaCard';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const pizzaOrder = useSelector(store => store.pizzaOrder);
    const pizzaList = useSelector(store => store.pizzaList);
    console.log(pizzaList);

    const history = useHistory();

    const next = () => {
        console.log('clicked next pizza order is:', pizzaOrder);
        history.push('/customer');
    }

    return (
        <div>
            <h1>Home Page / Order Pizza Area</h1>
            <div className="card">
                {pizzaList.map(pizza => {
                    return <PizzaCard key={pizza.id} pizza={pizza} />
                })}
            </div>
            {JSON.stringify(pizzaOrder)}
            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Home;