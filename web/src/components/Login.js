import React, {useState} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();

		const res = await fetch('/login', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email, password
			})
		});

		const data = res.json();

		if(res.status === 400 || !data){
			window.alert('Invailid Details!');
		}else{
			window.alert('Login Successful');
			navigate('/');
		}
	}
  return (
	<>
				<div className="container shadow-lg p-4 rounded mx-auto my-4">
				<h2 className="text-center">Login</h2>
                <h5 className="text-center">Welcome Back</h5>
				<div className="my-5">
					<form autoComplete='on' method='POST'>
						<div className="form-group">
                        <label htmlFor="name"><span className="material-symbols-rounded  mr-2">person</span></label>
							<input type="email" className="form-control border-top-0 border-right-0 border-left-0 rounded-0" name='email' value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='E-Mail' autoComplete='on' />
						</div>
						<div className="form-group">
                        <label htmlFor="name"><span className="material-symbols-rounded  mr-2">lock</span></label>
							<input type="password" className="form-control border-top-0 border-right-0 rounded-0 border-left-0" id="password" name='password' value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' autoComplete='on' />
						</div>
						<button type="submit" className="btn btn-warning btn-block my-3 shadow-lg" onClick={handleLogin}>Login</button>
					</form>
					</div>
				</div>
			</>
  )
}

export default Login;