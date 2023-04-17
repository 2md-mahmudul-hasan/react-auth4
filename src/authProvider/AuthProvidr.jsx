import React, { createContext, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const userContext = createContext(null)
const auth = getAuth(app)



const AuthProvidr = ({ children }) => {
  const [user, setUser] = useState(null)



  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    auth,
    user,
    createuser,
    signIn
  }


  return (
    <userContext.Provider value={userInfo}>
      {children}
    </userContext.Provider >
  );
};

export default AuthProvidr;


{/* 
1. create context and export context
2. create provider
3. set context value
4. to access the value, use contex hook.
....................

Then in main jsx put every thing under USER CONTEXt

*/}