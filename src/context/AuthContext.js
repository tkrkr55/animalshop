import { createContext, useContext, useEffect, useState } from "react";
import { onUserStateChange,login,logout } from "../service/firebase";


const AuthContext = createContext();

export function AuthContextProvider({children}){
  const [user,setUser] = useState()

  useEffect(()=>{
    onUserStateChange((user)=>{
      setUser(user)
    })
  },[])
  return <AuthContext.Provider value={{user, uid:user && user.uid ,login ,logout}}>
    {children}
  </AuthContext.Provider>
}

export function useAuthContext(){
  return useContext(AuthContext);
}