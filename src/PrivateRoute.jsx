import React from 'react';
import {  Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {

    // useSelector : lire l'etat du store
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // route protégée qui va permettre l'acces au composant user seulement si l'utilisateur est authentifié 
    // sinon il renvoie vers la page signin

    // element : parametre qui correspond au composant que l'on souhaite rendre accessible si isAuthenticated = true : connecté

    return  isAuthenticated ? element : <Navigate to="/signin" />


  
};

export default PrivateRoute;
