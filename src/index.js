import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaList = (state=[], action) => {
    if (action.type === 'GET_PIZZA') {
        return action.payload;
    }
    return state;
}

const customerInfo = (state=[], action) => {    
    return state
}

const pizzaOrder = (state=[], action) => {
    if (action.type === 'ADD_PIZZA') {
        return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaList,
        customerInfo,
        pizzaOrder
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

