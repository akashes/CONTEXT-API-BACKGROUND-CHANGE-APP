import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

function GreenButton() {
   const {changeTheme}= useContext(ThemeContext)
  return (
    <button onClick={()=>changeTheme('green')} className="btn btn-success">Green Button</button>
  )
}

export default GreenButton
