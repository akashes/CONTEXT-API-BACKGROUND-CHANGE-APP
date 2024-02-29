import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Context'

function SecondComponent() {
   const {changeTheme}= useContext(ThemeContext)
  return (

    <button onClick={()=>changeTheme('blue')} className='btn btn-success '>BlueButton</button>
 
  )
}

export default SecondComponent
