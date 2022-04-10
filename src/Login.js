import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="login">
        <img className="login_logo" src="https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif" alt="logo"/>

        <div className="login_container">
           <h1>SignIn</h1>
            
            <form>
                <h5>Email</h5>
                <input  type="email"/>

                <h5>Password</h5>
                <input type="password"/>

                <button className="login_signInButton">SignIn</button>
            </form>
            <p>
                By signing-in you agree to the terms and conditions of this website.
            </p>
            <button className="login-registerButton">Create your amazon account</button>
        </div>
    </div>
  
  )
}

export default Login