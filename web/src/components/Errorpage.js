import React from 'react';
import { NavLink } from 'react-router-dom';
import Error from '../assets/Error.svg';

const Errorpage = () => {
  return (
    <>
      <div className="container text-center">
        <img src={Error} alt="Page Not Found" className='d-block mx-auto' style={{ width: '50vh' }} />
        <h3 className="text-center">Page Doesn't Exist</h3>
        <NavLink to='/' className='btn btn-warning rounded shadow-lg'>Go To Home</NavLink>
      </div>
    </>
  )
}


export default Errorpage;