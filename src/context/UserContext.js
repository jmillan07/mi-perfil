import { createContext, useEffect, useState } from "react";
import devto from "../monks/deto";


const userContext ={
    devToUserName : 'uriel_hedz',
    articlesFromDev : [],
}

export const UserContext = createContext();

export const UserProvider=({children}) =>{

    const [user, setUser ]= useState(userContext)
    useEffect(()=>{
        async function fechtdev(){
            const response = await fetch('https://dev.to/api/articles?username='+user.devToUserName)
            const articles = await response.json();
            setUser({...userContext,articlesFromDev:articles})
        }

        fechtdev();
    },[user.devToUserName])

    return (
    <UserContext.Provider value={[user,setUser]}>
        {children}
    </UserContext.Provider>
    )
   
}