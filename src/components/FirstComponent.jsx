import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

function FirstComponent() {
   const{changeTheme}= useContext(ThemeContext)
  return (
    <div>
        <button onClick={()=>changeTheme('red')} className='btn btn-success ' >RedButton</button>
      
    </div>
  )
}

export default FirstComponent
