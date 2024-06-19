import React,{useState} from 'react';
import './Register.css';
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

const Register = () => {

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  //onclick let us get what the user has entered
  const createUser =()=>{
    //we shall require Axios to create an API that connects to the server -lets install that
    axios.post('http://localhost:3000/Register', {
        Email: email,
        UserName: username,
        Password: password
    }).then((response) => {
        console.log(response.data); // Log the response from the server
        alert('user has been successfully registered');
    }).catch((error) => {
        console.error('Error booking appointment:', error);
        alert('Failed to book appointment');
    });
  }
  return (
    <div>
        <div className="container">
        <div className="signup-card mt">
            <h1 className="text-center mb-5 text-dark">Sign Up</h1>
            <form>
            <div className='inputs'>
            <div className='input'>
            <IoMdMail className='icon h1'/>
                <input type='email' name='email' placeholder='Enter Email' onChange={(event)=>{
                    setEmail(event.target.value)
                }}/>
            </div>
            </div>
            <div className='inputs'>
            <div className='input'>
            <FaUser className='icon h2'/>
                <input type='text' name='name' placeholder='Enter Username' onChange={(event)=>{
                    setUserName(event.target.value)
                }}/>
            </div>
            </div>
            <div className='inputs'>
            <div className='input h2'>
            <FaLock className='icon'/>
                <input type='password' name='password' placeholder='Password' onChange={(event)=>{
                    setPassword(event.target.value)
                }}/>
            </div>
            </div>
                <div class="d-grid" style={{marginTop:'2rem'}}>
                    <button type="submit" className="btn btn-dark" onClick={createUser}>Sign Up</button>
                </div>
                <div style={{marginTop:'0.1rem'}}>
                <div className='foot'>
                    go to login?<a style={{marginLeft:'0.2rem',textDecoration:'none'}} href='/login'>Login</a>
                </div>
                </div>
            </form>
        </div>
    </div>
    </div>
 
  )
}
export default Register;