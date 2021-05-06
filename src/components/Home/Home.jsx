import { useSelector } from 'react-redux';
import PizzaCard from './PizzaCard';

const Home = () => {

    const pizzaList = useSelector(store => store.pizzaList);
    console.log(pizzaList);

    const next = () => {
        console.log('clicked next');
    }

    return (
        <div>
            <h1>Home Page / Order Pizza Area</h1>
            <div className="card">
                {pizzaList.map(pizza => {
                    return <PizzaCard key={pizza.id} pizza={pizza} />
                })}
            </div>
            <div>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Home;