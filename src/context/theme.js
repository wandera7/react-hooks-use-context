import React, { createContext } from "react";

const ThemeContext=createContext()

function ThemeProvider ({children}){
    const [theme, setTheme] = useState("dark");
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
        {children}

        </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext};