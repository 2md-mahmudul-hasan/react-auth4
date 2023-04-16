import React, { createContext, useRef } from 'react';
export const userContext = createContext(null)

const AuthProvidr = ({ children }) => {
  const user = { disPlayname: 'mahmudul hasan' }
  return (
    <userContext.Provider value={user}>
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