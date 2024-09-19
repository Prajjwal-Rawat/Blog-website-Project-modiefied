import { createContext, useState } from "react";



export const DarkmodeContext = createContext();


function DarkModeProvider({children}){
    
    const [lightMode, setLightMode] = useState(true);

    function HandleDarkMode(){
        setLightMode(!lightMode);
    }

    return <DarkmodeContext.Provider value={{lightMode, HandleDarkMode}}>
         {children}
    </DarkmodeContext.Provider>
}

export default DarkModeProvider;