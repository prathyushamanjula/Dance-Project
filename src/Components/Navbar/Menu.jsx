import React from "react"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
  
const Menu = () => {
    let navigate = useNavigate()
    let token = localStorage.getItem("token")
    let role = localStorage.getItem("role")

    let logoutHandler=()=>{
        alert("Are You Sure, You Want To LogOut")
        localStorage.clear()
        navigate("/login")
    }

    return (
        <div id="menu">
            <ul>
                <li><Link to="/home" className="lii"><b>HOME</b></Link></li>
                <li><Link to="/about" className="lii"><b>ABOUT-US</b></Link></li>
                <li><Link to="/gallery" className="lii"><b>GALLERY</b></Link></li>
                { role === "ROLE_ADMIN" ? <Link to="/adminDashboard"><li><b>ADMIN-DASHBORAD</b></li></Link> :null}
                { token ? <Link to="/login"><li onClick={logoutHandler}><b>LOGOUT</b></li></Link>:
                    <>
                        <li><Link to="/login" className="lii"><b>LOGIN</b></Link></li>
                        <li><Link to="/register" className="lii"><b>SIGN-UP</b></Link></li>
                    </>
                }
            </ul>
        </div>
    )
}

export default Menu


