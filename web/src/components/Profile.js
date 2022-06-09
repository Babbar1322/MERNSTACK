import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Profile = () => {
    const [userData, setUserData] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const callAboutPage = async () => {
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
            setUserData(data);
            setIsLogin(true);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])
    return (
        <>
            {isLogin ? <div className="container shadow-lg p-4 rounded mx-auto my-4">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="text-center">
                                <img src='https://i.ibb.co/dtXRQKD/72-723761-student-png-sammilani-mahavidyalaya-undergraduate-and-dummy-user.png' alt='Profile' className='rounded p-2 w-75 d-block mx-auto' />
                                <button className='btn btn-outline-warning btn-sm'>Edit Profile</button>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h4 className="text-center">{userData.name}</h4>
                            <h5 className="text-center text-warning">Web Developer</h5>

                            <p className='text-center my-2'><span className="text-muted">Ranking:</span> <b>8.5/10</b></p>

                            <div className="my-5">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="container">
                                        <div className="row mt-3">
                                            <div className="col-6"><b>User Id</b></div>
                                            <div className="col-6">{userData._id}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-6"><b>Email</b></div>
                                            <div className="col-6">{userData.email}</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo rem nobis itaque, doloribus eveniet sed dolorum, possimus praesentium placeat nam dolore omnis eum. Sint sequi, facere dignissimos expedita obcaecati delectus.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div> : 
            <div className='container shadow-lg p-4 rounded mx-auto my-4'>
                <h1 className='text-center'>Please Login and Try Again.</h1>
                </div>}
        </>
    )
}

export default Profile;
