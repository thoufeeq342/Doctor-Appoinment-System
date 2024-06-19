import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

const Login = () => {
  
    //usestate to hold our inputs
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();
  
    const LoginUser = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:3000/login', {
        LoginUserName: loginUserName,
        LoginPassword: loginPassword
      })
      .then(() => {
        // Handle successful login response
        navigateTo('/appointment');
      })
      .catch((error) => {
        console.error('Error logging in: ', error);
        if (error.response.status === 401) {
          alert('Login credentials do not match!');
        } else {
          alert('An error occurred. Please try again later.');
        }
      })
    }
 return (
    <div>
      <div className="container">
        <div className="signup-card mt">
            <h1 className="text-center mb-5 text-dark">Login</h1>
            <form>
            <div className='inputs'>
            <div className='input'>
            <FaUser className='icon h2'/>
                <input type='text' name='name' placeholder='Enter Username' onChange={(event)=>{
                    setLoginUserName(event.target.value)
                }}/>
            </div>
            </div>
            <div className='inputs'>
            <div className='input'>
            <FaLock className='icon h2'/>
                <input type='password' name='password' placeholder='Password' onChange={(event)=>{
                    setLoginPassword(event.target.value)
                }}/>
            </div>
            </div>
                <div class="d-grid" style={{marginTop:'2rem'}}>
                    <button type="submit" className="btn btn-primary" onClick={LoginUser}>Login</button>
                </div>
                <div style={{marginTop:'0.1rem'}}>
                <div className='foot'>
                    don't have an account?<a style={{marginLeft:'0.2rem',textDecoration:'none'}} href='/register'>Sign up</a>
                </div>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}
export default Login;