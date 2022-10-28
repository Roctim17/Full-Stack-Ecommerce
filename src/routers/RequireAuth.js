import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const RequireAuth = ({children}) => {

    const {currentUser}= useAuth()
    return currentUser ? children : <Navigate to='/login'/>
};

export default RequireAuth;