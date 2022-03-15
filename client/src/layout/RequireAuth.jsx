import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth  from '../context/UseAuth';

export const RequireAuth = ({ children }) => {
  const { authed } = useAuth()
  const location = useLocation();
    return authed ? (
        children 
        ) : (
            <Navigate to ='/' replace state={{path: location.pathname}}/>
        )
}
