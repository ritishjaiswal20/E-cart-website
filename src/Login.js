import React, { useState } from 'react'
import {Link} from "react-router-dom";
import './Login.css'
function Login() {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const signIn=(e)=>{
    e.preventDefault();
  }
 const register =(e)=>{
   e.preventDefault();
 }
  return (
    <div className="login">
      <Link to='/'>

      <img className="login_logo" src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="logo"/>

      </Link>

        <div className="login_container">
           <h1>SignIn</h1>
            
            <form>
                <h5>Email</h5>
                <input  type="email" value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button onClick={signIn} className="login_signInButton">SignIn</button>
            </form>
            <p>
                By signing-in you agree to the terms and conditions of this website.
            </p>
            <button onClick={register} className="login-registerButton">Create your amazon account</button>
        </div>
    </div>
  
  )
}

export default Login