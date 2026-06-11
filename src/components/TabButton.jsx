import React from 'react'

export default function TabButton(props) {
  function handleClick(){

  }
    return (
    <li><button className= {props.isActive? 'active': ''} onClick={props.onSelect}>{props.children}</button></li>
  )
}
