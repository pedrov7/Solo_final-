import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

function UseAuth () {
    const [authed, setAuthed] = useState(false);
    // const [userNameAuth, setUserNameAuth] = useState('')
    const [token, setToken] = useState('')


    const login = (user, password) =>{
        return axios.post('http://localhost:8000/login',{
            user,
            password
        }).then(res => {
            setToken(jwt_decode(res.data))
            setAuthed(true)
        }).catch(e => {
            alert('Error al autenticar')
            setAuthed(false)
        })
    }
    const logout = () =>{
        setAuthed(false)
        setToken('')
    }
    return {
        authed,
        login,
        logout,
        token,
    }
}

export function AuthProvider({children}){
    const auth = UseAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default function AuthConsumer(){
    return useContext(AuthContext)
}
