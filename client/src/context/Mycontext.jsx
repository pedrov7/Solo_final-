import React ,{createContext, useState} from 'react'
export const myContext = createContext();


export const Mycontext = ({children}) => {

    const [order, setOrder] = useState([]);
    const [desk, setDesk] = useState('');

  return (

    

    <myContext.Provider value = {{order, setOrder, desk, setDesk}}>
    {children}
    </myContext.Provider>

  )
}