import React, { useContext, useRef } from 'react'
import { Data } from './StoreContext/StoreContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InputData() {
    const {handelcliick} = useContext(Data)
    const inpRef=useRef()
  return (
    <div className='inputdiv'>
      <input ref={inpRef} type="text" name="" id="" />
      <button onClick={()=>{handelcliick(inpRef.current.value)}}>Find</button>
      <ToastContainer />
    </div>
  )
}
