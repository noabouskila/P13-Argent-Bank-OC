import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import PrivateRoute from '../PrivateRoute';
import {  useState, useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
// import { checkAuth } from './actions';
import { checkAuth } from './authSlice';

const App = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // verifier et charger le token  : dauthentification lors du montage initial du composant App
  useEffect(() => {
    dispatch(checkAuth());
    setLoading(false);
  }, [dispatch]);


  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  if (loading) {
    return <div>Loading...</div>; 
  } 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={< PrivateRoute element={<User/>}  isAuthenticated={isAuthenticated} />} /> 
      </Routes>
    </Router>
  );
};

export default App;

// LE PROVIDER EST DANS APP 