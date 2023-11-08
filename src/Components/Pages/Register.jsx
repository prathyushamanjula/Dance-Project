import React, { useState } from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { BsFillEyeFill,BsFillEyeSlashFill } from "react-icons/bs";

const Register = () => {
    let navigate = useNavigate()

    let [state,setState] = useState(false)
    let handleChange=()=>{
        setState(!state)
    }

    let [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        dob:"",
        phone:"",
        gender:""
    })
    let{userName,email,password,dob,phone,gender}=data

    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data, [name]:value})
    }

    let handleSignup= async(e)=>{
        e.preventDefault()
        console.log(data);
        try{
            let payload={userName,email,password,dob,phone,gender}
            await axiosInstance.post("/users/save",payload)
            toast.success("Registered Successfully",{position: 'top-center'})
        }
        catch{
            toast.success("Server Error",{position: 'top-center'})
        }
        navigate("/login")
    }

    return (
        <div id='maxx'>
        <div id='aa'>
            <form action="" onSubmit={handleSignup}>
                <nav id='bb'>
                    <h1><b>REGISTER FORM</b></h1>
                </nav>
                <fieldset id='field'>
                    <legend id='leg'><b><i>Enter Your Details Here</i></b></legend>
                    <br/>
                    <center>
                        <table>
                            <tr>
                                <th><label htmlFor="userName"><b>USERNAME :</b></label></th>
                                <td><input type="text" name="userName" value={userName} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="email"><b>EMAIL :</b></label></th>
                                <td><input type="email" name="email" value={email} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="password"><b>PASSWORD :</b></label></th>
                                <td><input type= {state? "text":"password"} name="password" value={password} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="dob"><b>DATE OF BIRTH :</b></label></th>
                                <td><input type="date" name="dob" id="" value={dob} className="non" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="phone"><b>PHONE NUMBER :</b></label></th>
                                <td><input type="text" name="phone" value={phone} className="non" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="gender"><b>GENDER :</b></label></th>
                                <td id='zz'><input type="radio" name="gender" id="" value="male" onChange={handleData}/>MALE
                                    <input type="radio" name="gender" id="" value="female" onChange={handleData}/>FEMALE
                                </td>
                            </tr>
                            <br/><br />
                            {state? <BsFillEyeFill onClick={handleChange} id='eye01'/>:<BsFillEyeSlashFill onClick={handleChange} id='eye01'/>}
                            <button id='but'><b>REGISTER</b></button>     
                        </table>
                    </center>
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default Register