import styles from "./MenuLink.module.css"
import { NavLink } from "react-router-dom"

export default function MenuLink({children, to}){

    // <NavLink/> é capaz de dizer se está ativo/inativo
    return(
        <NavLink 
            to={to}
            className={({isActive, isPending}) => 
                    isPending 
                    ? `${ styles.link }`
                    : isActive 
                    ? `${ styles.linkDestacado }`
                    : ""
            }   
        >
            {children}
        </NavLink>
    )
}