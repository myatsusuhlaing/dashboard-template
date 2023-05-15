import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const WithAuth = (Component) => {
  const AuthRoute = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = Cookies.get('accessToken');

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [navigate, !isAuthenticated]);

    return isAuthenticated ? <Component {...props} /> : null;
  };

  return AuthRoute;
};

export default WithAuth;
