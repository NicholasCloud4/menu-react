import React from "react"

export default function MenuDropdown({ children, open }) {
    return open === true ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}