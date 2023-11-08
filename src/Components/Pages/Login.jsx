import React, { useState } from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";
  
const Login = () => {
    let navigate = useNavigate()

    let [state,setState] = useState(false)
    let handleChange=()=>{
        setState(!state)
    }

    let [data,setData]=useState({
        userEmail:"",
        password:""
    })
    let{userEmail,password}=data

    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data, [name]:value})
    }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        let payload = {userEmail,password}
        let {data} = await axiosInstance.post("./authenticate",payload)
        toast.success("Login Successful",{position: 'top-center'})
        let token = data.token;
        let role = data.role;
        localStorage.setItem("token",token);
        localStorage.setItem("role",role);
        navigate('/home')
    }

    return (
        <div id='img'>
        <div id='aaa'>
        <form action="" onSubmit={handleSubmit}>
        <nav id='bb2'>
            <h1><b>LOGIN PAGE</b></h1>
        </nav>
        <fieldset id='set'>
            <legend id='leg'><b><i>Login Here</i></b></legend>
            <br />
            <center>
            <table>
                <tr>
                    <th><label htmlFor="userEmail"><b>EMAIL :</b></label></th>
                    <td><input type="email" name="userEmail" value={userEmail} id="" className="not" required onChange={handleData}/></td>
                </tr><br/>
                <tr>
                    <th><label htmlFor="password"><b>PASSWORD :</b></label></th>
                    <td><input type= {state? "text":"password"} name="password" value={password} id="" className="not" required onChange={handleData}/></td>
                </tr><br />
                {state? <BsFillEyeFill onClick={handleChange} id='eye00'/>:<BsFillEyeSlashFill onClick={handleChange} id='eye00'/>}
                <button id='ton'><b>LOGIN</b></button>     
            </table>
            </center>
        </fieldset>
        </form>
        </div>
        </div>
    )
}

export default Login