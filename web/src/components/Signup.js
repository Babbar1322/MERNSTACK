import React, {useState} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const navigate = useNavigate();

    const sendData = async (e) => {
        e.preventDefault();

        const res = await fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        const data = await res.json();

        if(data === 422 || !data){
            window.alert('Registration Failed!');
        }else{
            window.alert('Registration Successful!');
            navigate('/login');
        }
    }
  return (
    <>
        <div className='container shadow-lg p-4 rounded mx-auto my-4'>
                <h2 className="text-center">Sign Up</h2>
                <h5 className="text-center">Create New Accout</h5>
                <div className="my-5">
                <form method='POST'>

                    <div className="form-group">
                        <label htmlFor="name"><span className="material-symbols-rounded  mr-2">person</span></label>
                        <input className="form-control border-top-0 border-right-0 border-left-0 rounded-0" name='name' onChange={(e) => {setName(e.target.value)}} value={name} placeholder='Name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><span className="material-symbols-rounded  mr-2">mail</span></label>
                        <input type="email" className="form-control border-top-0 border-right-0 border-left-0 rounded-0" name='email' onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder='E-Mail' autoComplete='on' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><span className="material-symbols-rounded mr-2">lock</span></label>
                        <input type="password" className="form-control border-top-0 border-right-0 border-left-0 rounded-0" id="password" name='password' onChange={(e) => {setPassword(e.target.value)}} value={password} placeholder='Password' autoComplete='on'/>
                    </div>
                    <button type="submit" onClick={sendData} className="btn btn-warning btn-block shadow-lg">Signup</button>
                </form>
                </div>
            </div>
    </>
  )
}


export default Signup;