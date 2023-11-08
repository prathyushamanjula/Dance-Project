import React from "react"
import Icons from "./Icons"
import Logo from "./Logo"
import Menu from "./Menu"

let Navbar =()=>
{
    return(
        <section id="main">
            <article> 
                <Logo/>
                <Menu/>
                <Icons/>
            </article>
        </section>
    )
}
export default Navbar