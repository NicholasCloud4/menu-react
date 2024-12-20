import React from "react"

export default function MenuDropdown({ children, open, toggle }) {
    console.log("MENU DROPDOWN", open, toggle)
    /** Discovery Challenge:
     * Make it so the children of MenuDropdown also have
     * access to toggle and open.
     */
    return open === true ? (
        <div className="menu-dropdown">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, { toggle, open })
            })}
            {/* {children} */}
        </div>
    ) : null
}