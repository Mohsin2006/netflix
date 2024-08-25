import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
const Login = () => {
  const [currentState,setCurrentState]=useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{currentState}</h1>
        <form >
          {
            currentState==="Sign Up"?<input type="text" placeholder='your name'/>:<></>

          }
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='password'/>
          <button>{currentState}</button>
          <div className="form-help">
            <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            currentState==="Sign In"?<p>New to Netflix? <span onClick={()=>{setCurrentState("Sign Up")}}>Signup Now</span></p>
            :<p>Already have an account? <span onClick={()=>{setCurrentState("Sign In")}}>Sign In Now</span></p>
          }

        </div>
      </div>
    </div>
  )
}

export default Login
