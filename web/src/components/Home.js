import React, { useEffect, useState } from 'react';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [isLogin, setIsLogin] = useState(false);

	const authenticate = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);
            setUserName(data.name);
			setIsLogin(true);
        } catch (error) {
            console.log(error);
			setIsLogin(false);
        }
    }

	useEffect(() => {
        authenticate();
    }, [])
	return (
		<>
			<div className="container h-100">
				<h2 className='text-center text-warning'>Welcome</h2>
				<h1 className={isLogin ? 'd-block text-center' : 'd-none'}>{isLogin ? userName : ' '}</h1>
				<h5 className='text-center'><b>{isLogin ? "Good To See You Back 😊" : "Currently Learning MongoDB, Express.JS, React.JS, Node.JS"}</b></h5>
			</div>
		</>
	)
}

export default Home;