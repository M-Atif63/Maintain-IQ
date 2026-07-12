import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from "../BackendAssets/Firebase.js"

function Signup() {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [CNIC, setCNIC] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleFormBtn() {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('user=>',user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <h1 id='Title'>Registration Form</h1>
      <div id='mainContainer'>
        <form>
          {/* <label> First Name : <input type="text" id='userFirstName' onChange={(e) => setFName(e.target.value)} required /></label><br /><br /> */}
          {/* <label> Last Name : <input type="text" id='userLastName' onChange={(e)=>setLName(e.target.value)} required /></label><br /><br /> */}
          <label> Email : <input type="email" id='email' onChange={(e)=>setEmail(e.target.value)} required /></label><br /><br />
          <label> Password : <input type="password" id='password' onChange={(e)=>setPassword(e.target.value)} autoComplete='off' required /></label><br /><br />
          {/* <label> CNIC Number<input type="number" id='cnic' onChange={(e)=>setCNIC(e.target.value)} required /></label><br /><br /> */}
          <button id='loginBtn' onClick={handleFormBtn}>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
