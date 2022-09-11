import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {

  //to locate each page for fade-in effect
  const location = useLocation();

  //loading spinner
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(() =>{
        setLoading(false)
      }, 150)
    }, [])

  return (

        <>
          <Navbar />
            <Routes location={location} key={location.pathname}>
              <Route path='/' exact element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/products' element={<Products />} />
              <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </>

  );
}

export default App;
