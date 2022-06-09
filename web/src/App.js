import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './components/Home';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';

const App = () => {
  return (
    <Router>
		 <Navbar />
		 <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/logout" element={<Logout/>}/>
          <Route path='*' element={<Errorpage/>}/>
        </Routes>
		 </Router>
  )
}

export default App;