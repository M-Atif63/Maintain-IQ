import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from "../../BackendAssets/Firebase.js"
import "./signup.css"
import Button from '../../button/Button.jsx'
import { NavLink } from 'react-router'

function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)

  function handleSignup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="signup-page">
      <Button btnValue={"Admin Page"} />

      <div className="signup-card">
        <h1 className="signup-title">Registration Form</h1>
        <p className="signup-subtitle">Create your account</p>

        <form>
          <label className="signup-label">
            First Name
            <input
              type="text"
              placeholder="Enter First Name"
              className="signup-input"
              required
            />
          </label>

          <label className="signup-label">
            Last Name
            <input
              type="text"
              placeholder="Enter Last Name"
              className="signup-input"
              required
            />
          </label>

          <label className="signup-label">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="signup-input"
              required
            />
          </label>

          <label className="signup-label">
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••••"
              className="signup-input"
              autoComplete="off"
              required
            />
          </label>

          <label className="signup-label">
            CNIC Number
            <input
              type="text"
              placeholder="XXXXX-XXXXXXX-X"
              className="signup-input"
              required
            />
          </label>

          <button type="button" className="signup-button" onClick={handleSignup}>
            Signup →
          </button>

          <p className="signup-footer">
            Already have an account?{" "}
            <NavLink to={'/login'} style={{textDecoration:'none'}}>
              <span className="signup-link">Login</span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;