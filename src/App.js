import React, { useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import { auth } from './Components/firebase';
import { useStateValue } from './Components/StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  'pk_test_51HeKIjLDjj4MM1DCtC4NbYMYTZRr7piQYEFtLpsGgXRoa40qMMaB9E5LEj38SmItgVly8nszpUj0rYjMcn43CYCI00IkEYwhdd'
  );

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app componet load ....
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser); 
      if (authUser) {
        // the user just loogged in  / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        // the user is logged out
      dispatch({
        typy:'SET_USER',
        user: null
      })
      }
    })
  },[])
  return (
    
    <Router>
      <div className="App">
      
        <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>
        <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
             <Payment /> 
            </Elements>
          
        </Route>
        <Route path="/">
            <Header />
            <Home />
        </Route>
        </Switch>
      
      </div>
    </Router>
     

    
  );
}

export default App;
