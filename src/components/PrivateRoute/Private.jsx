import React, { Children, useContext } from 'react';
import { userContext } from '../../authProvider/AuthProvidr';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
  const { user } = useContext(userContext)

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true} />

};

export default Private;