import React, { useContext, useState } from 'react'
import "./login.scss"
import { signInWithEmailAndPassword   } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const{dispatch} = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/")
  })
  .catch((error) => {
    setError(true);
  });
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
        <button type='submit' >Submit</button>
      </form>
      { error && <span>Wrong Email or Password</span>}
    </div>
  ) 
}
export default Login