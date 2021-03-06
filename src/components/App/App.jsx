import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PizzaForm from '../PizzaForm/PizzaForm';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import { useDispatch } from 'react-redux';
import Checkout from '../Checkout/Checkout';
import Header from '../Header/Header';

import Administration from '../Administration/Administration';

import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  // Load app bar information from the theme
  toolbar: theme.mixins.toolbar,
}));

function App() {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    getPizza();
  }, [])

  const getPizza = () => {
    axios.get('/api/pizza')
      .then(response => {
        dispatch({ type: 'GET_PIZZA', payload: response.data });
      })
      .catch(error => {
        console.log('error getting pizza:', error);
      })
  }

  return (
    <div className='App'>
      <div className={classes.toolbar}>
        <Header />
      </div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/customer" component={PizzaForm} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/admin" administration={Administration} />
      </Router>
    </div>
  );
}


export default App;
