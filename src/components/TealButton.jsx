import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

function TealButton() {
    const {changeTheme}=useContext(ThemeContext)
  return (
    <button onClick={()=>changeTheme('gold')} className="btn btn-success">Gold Button</button>

  )
}

export default TealButton
