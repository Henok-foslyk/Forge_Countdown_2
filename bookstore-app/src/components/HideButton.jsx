import React from 'react'
import '../styles/hidebutton.css'

const HideButton = ({title}) => {
  return (
    <button className= 'hidebutton'>Hide {title}</button>
  )
}

export default HideButton
