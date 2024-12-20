import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {

    const context = React.useContext(MenuContext)

    return context.open === true ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}