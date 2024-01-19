import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Data = createContext();   //create a context
export default function StoreContext({ children }) {
    const[follower,setfollowr] = useState([])
    const[chek,setcheck] =useState(false)
    const handelcliick = (arg)=>{
        setcheck(true)
        if(arg.length===0){
            setcheck(false)
            return
        }
        handleApi(arg);

    }
        const handleApi = async (user) => {
            try {
                const response = await axios.get(`https://api.github.com/users/${user}/followers`);
                const data = await response.data;
                setfollowr(data)
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

//    console.log(follower);
    return (
        <Data.Provider value={{handelcliick,follower,chek}}>
            {children}
        </Data.Provider>
    )
}
