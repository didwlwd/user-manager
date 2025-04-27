import React, {createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export function BlackOrWhite({children}){
    const [isDarkmode, setTheme] = useState(false);

    const toggleTheme = () =>{
        setTheme(prev => !prev)
    }

  return (
    <ThemeContext.Provider value={{isDarkmode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function themeChange(){
  return useContext(ThemeContext);
}
