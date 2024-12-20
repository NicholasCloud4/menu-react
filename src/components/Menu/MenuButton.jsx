import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

export default function MenuButton({ children }) {
    const context = React.useContext(MenuContext)

    return (
        <Button onClick={context.toggle}>{children}</Button>
    )
}