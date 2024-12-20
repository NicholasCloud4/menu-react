import React from 'react'

export default function MenuItem({ children, open, toggle }) {
    console.log("MENU ITEM", open, toggle)
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}
