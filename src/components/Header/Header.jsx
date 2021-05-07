import {useSelector} from 'react-redux';

function Header(){

    //***This reducer name was changed and is now two so
    //we need to figure out how to get the total value here
    //However, we do not necessarily need conditional rendering here
    //const total = useSelector(store => store.orderReducer);

    return(
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            {/* Add logic to conditionall display total price */}
            {/* <h3>Total: {total.total}</h3> */}
        </header>
    )
}

export default Header;