import React from 'react'
import './displaylist.css'
export default function DisplayList({item}) {
  return (
    <li className='display-list'>
        <img src={item.avatar_url} alt="" />
        <p>{item.login}</p>
    </li>
  )
}
