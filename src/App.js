import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js"
function App() {
  const promise=loadStripe(
    "pk_test_51Knjl3SHIIKfM7quj6VvO9LXKAK36vee2ZAjaPnFSZCE0reWa1bsoMI9YuKb7Ik6DHS4Ks8piQ0c9VcQJMVVSGYJ00hy3HRW2Z"
  );


  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser)
      {
        //user is logged in
         dispatch({
           type:'SET_USER',
            user:authUser
         })
      }
      else
      {
         dispatch({
           type:'SET_USER',
           user:null,
         })
      }
    })
  },[])
  return (
    <Router>
    <div className="app">
   
      <Switch>
        
        <Route path="/login">
         <Login />
         </Route>
        <Route path="/checkout">
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
       
        </Route>

        <Route path="/">
          <Header/>
          <Home />
        </Route>
      
      </Switch>
    </div>
   </Router>
  );
}

export default App;
