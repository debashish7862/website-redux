import { createContext,useState } from "react";
export const AuthContext=createContext();
function CustomProvider({children}){
    const [islogedin,setIsloggin]=useState(false) // for somewhile
    return <AuthContext.Provider value={{islogedin,setIsloggin}}>
         {children}
    </AuthContext.Provider>
}
export default CustomProvider;