import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState('white')
    const changeTheme=(value)=>{
      setTheme(value)

    }
    return(
        <ThemeContext.Provider  value={{theme,changeTheme}} >
            {children}
        </ThemeContext.Provider>

    )
}
export default ThemeContextProvider