import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEffect');
    getPizza();
  }, [])

  const getPizza = () => {
    axios.get('/api/pizza')
      .then(response => {
        dispatch({type:'GET_PIZZA', payload: response.data});
      })
      .catch(error => {
        console.log('error getting pizza:', error);
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
    </div>
  );
}

export default App;
