import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import Login from '../pages/Login';

export const RequireAuth = ({ children }: {children: React.JSX.Element}) => {
  const auth = useContext(AuthContext);

  if(!auth){
    return <Login />
  }
  return children;
}