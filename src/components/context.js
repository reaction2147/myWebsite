import React, {useState} from "react"


const Context = React.createContext() 

function ContextProvider({children}) {

//Mobile burger toggle

const [isActive, setisActive] = useState(false)

return (
    <Context.Provider value={{isActive, setisActive}} >
        {children}
    </Context.Provider>
)
}

export {ContextProvider, Context}
