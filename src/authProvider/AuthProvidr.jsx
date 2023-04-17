import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
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

  //get signed user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, signdInUser => {
      // const getUser = signdInUser.email;
      setUser(signdInUser)
      console.log(signdInUser)
    });
    return () => { unsubscribe() }
  }, [])

  const logout = () => {
    return signOut(auth);
  }

  const userInfo = {
    auth,
    user,
    createuser,
    signIn,
    logout
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