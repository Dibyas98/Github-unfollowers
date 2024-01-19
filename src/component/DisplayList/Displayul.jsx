import React, { useContext } from 'react'
import { Data } from '../inputData/StoreContext/StoreContext'
import DisplayList from './DisplayList'
import { nanoid } from 'nanoid'
export default function Displayul() {
    const{follower,chek} =useContext(Data)
  return (
    <ul className='displayul'>
        {
             follower.length>0?follower.map((item)=>{
                return <DisplayList key={nanoid()} item={item}></DisplayList>
            }):
            chek?<h1>No Followers Found</h1>:<h1>No Search Found</h1>
        }
    </ul>
  )
}
