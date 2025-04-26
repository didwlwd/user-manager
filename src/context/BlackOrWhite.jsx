import React, {createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export function BlackOrWhite({children}){
    const [theme, setTheme] = useState("white");

    const toggleTheme = () =>{
        setTheme(theme === "white" ? "black" : "white")
    }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function themeChange(){
  return useContext(ThemeContext);
}
