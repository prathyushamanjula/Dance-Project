import React, { useState } from 'react'
import axiosInstance from '../Helpers/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const AdminRegister = () => {
    let navigate = useNavigate()
    let [data,setData]=useState(
        {
            userName:"",
            email:"",
            password:"",
            dob:"",
            phone:"",
            gender:""
        }
    )
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
            await axiosInstance.post("/admins/save",payload)
            toast.success("Admin Registered Successfully",{position: 'top-center'})
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
                    <h1><b>ADMIN REGISTER FORM</b></h1>
                </nav>
                <fieldset id='field'>
                    <legend><b><i>Enter Details Here</i></b></legend>
                    <br />
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
                                <td><input type="password" name="password" value={password} className="non" id="" required onChange={handleData}/></td>
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
                            <button id='but'><b>REGISTER</b></button>     
                        </table>
                    </center>
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default AdminRegister
