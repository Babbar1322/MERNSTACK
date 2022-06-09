import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const clearCookie = async () => {
        try {
            const res = await fetch('/logout', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            } else {
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // fetch('/logout', {
        //     method: 'GET',
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     credentials: "include"
        // }).then((res) => {
        //     window.alert('Logout Successfully');
        //     navigate('/login');
        // }).catch((err) => {
        //     console.log(err);
        // })
        clearCookie();
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="spinner-border" style={{ width: '10vw', height: '10vw', borderWidth: 10 }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Logout