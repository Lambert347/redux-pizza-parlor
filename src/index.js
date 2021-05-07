import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaList = (state = [], action) => {
    if (action.type === 'GET_PIZZA') {
        return action.payload;
    }
    return state;
}

const initState = {
    pizzaOrder: [],
    customerInfo: {},
    total: 0
}

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA':
            return {
                ...state,
                pizzaOrder: [...state.pizzaOrder, action.pizza],
                total: Number(action.pizza.price) + state.total
            }
        case 'REMOVE_PIZZA':
            const id = action.pizza.id
            return {
                ...state,
                pizzaOrder: state.pizzaOrder.filter((pizza) => pizza.id !== id),
                total: state.total - Number(action.pizza.price)
            }
        case 'ADD_NEW_ORDER':
            return {
                ...state,
                customerInfo: action.payload
            }
    }

    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaList,
        orderReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

