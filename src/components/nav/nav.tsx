import classes from "@core/components/nav/nav.module.scss"
import Logo from "../logo/logo"
import Image from "next/image"

interface NavProps {
    extraClass?: string
}

export default function Nav({...props}) {
    const className = props.extraClass ? `${props.extraClass} ${classes.root}` : classes.root

    return (
        <nav className={className}>
            <div className={classes.logo}>
                <h1><Logo/></h1>
                <span className={classes.ather}>by ATHER</span>
            </div>
            
        </nav>
    )
}