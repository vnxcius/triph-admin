import { Navigate } from 'react-router-dom';
import { useContext, ReactNode } from 'react'
import { AuthContext } from './AuthContext';

function LoginGuard({ children }: { children: ReactNode }) {

  const auth = useContext(AuthContext)
  const isAuthenticated = auth.user;

  if (isAuthenticated != null) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default LoginGuard
