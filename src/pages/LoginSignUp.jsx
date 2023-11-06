import React from 'react'
import './css/loginSignUp.css'
const LoginSignUp = () => {
  return (
    <div className= "loginsignup">
        <div className="loginsignup-container">
          <h1>sign up</h1>
          <div className="loginsignip_fields">
            <input type="text" placeholder='your name' />
            <input type="email" placeholder='email address' />
            <input type="password" placeholder='password'/>

          </div>
          <button>continue</button>
          <p className="loginsignup-login">
            already have an account? <span>login</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name = "" id= "" />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignUp