import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

function DarkCyan() {
    const {changeTheme}=useContext(ThemeContext)
  return (
    <div>
        <button onClick={()=>changeTheme('darkCyan')} className="btn btn-success">Dark Cyan</button>
      
    </div>
  )
}

export default DarkCyan
