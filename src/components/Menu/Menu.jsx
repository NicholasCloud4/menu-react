import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

/**
     * Challenge:
     * Using what you know now, complete the Menu component so 
     * everything is working again via Context + State
     */

const MenuContext = React.createContext()

export default function Menu({ children }) {
    const [open, setOpen] = React.useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={{ open, toggle }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }
