import React from 'react'

function Login() {
  return (
    <div>
      <div id='mainContainer'>
        <form>
          <label> Email : <input type="email" id='email' required/></label><br /><br />
          <label> Password : <input type="password" id='password' required/></label><br /><br />
          <input type="button" id='loginBtn' value="Login"/>
        </form>
      </div>
    </div>
  )
}

export default Login
