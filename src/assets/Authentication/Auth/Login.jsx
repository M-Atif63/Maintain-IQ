import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from "../../BackendAssets/Firebase.js"
import "./login.css"
import Button from '../../button/Button.jsx'
import { NavLink } from 'react-router'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)

  function handlelogin() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="login-page">
      <Button btnValue={'Admin Panel'} />
      <div className="login-card">
        <h1 className="login-title">Login Now</h1>
        <p className="login-subtitle"></p>

        <form>
          {/* <label className="login-label">
            First Name
            <input
              type="text"
              placeholder="Enter First Name"
              className="login-input"
              required
            />
          </label> */}

          {/* <label className="login-label">
            Last Name
            <input
              type="text"
              placeholder="Enter Last Name"
              className="login-input"
              required
            />
          </label> */}

          <label className="login-label">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="login-input"
              required
            />
          </label>

          <label className="login-label">
            Password
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••••"
              className="login-input"
              autoComplete="off"
              required
            />
          </label>

          <h4><span className="login-link">Forget Password</span></h4>
          <br />
          {/* <label className="login-label">
              CNIC Number
              <input
                type="text"
                placeholder="XXXXX-XXXXXXX-X"
                className="login-input"
                required
              />
            </label> */}

          <button type="button" className="login-button" onClick={handlelogin}>
            Login →
          </button>
          <p className="login-footer">
            Create New Accpunt? {" "}
            <NavLink to={'/signup'}>
              <span className="login-link">Signup</span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;