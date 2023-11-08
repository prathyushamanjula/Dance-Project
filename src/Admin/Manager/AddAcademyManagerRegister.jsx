import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify';

const AddAcademyManagerRegister = () => {
    let navigate=useNavigate()
    let token=localStorage.getItem("token")
    let [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        dob:"", 
        phone:"",
        gender:""
    })

    let {userName,email,password,dob,phone,gender}=data;
    let handleData=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }
    let handleSignup= async (e)=>{  
        e.preventDefault();
        let payload={userName,email,password,dob,phone,gender}
        let finalData=await axiosInstance.post("/academymanagers/save",payload,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
        console.log(finalData);
        toast.success("Registered Successfully",{position: 'top-center'})
        navigate("/adminDashboard/viewAcademyManager")
    }
    return (
        <div id='max'>
            <h1 id='add'><b>ADD ACADEMY MANAGER DETAILS</b></h1>
        <div id='aa2'>
            <form action="" onSubmit={handleSignup}>
                <fieldset id='field2'>
                    <legend id='leg2'><b><i>Add Manager Details</i></b></legend>
                    <br/>
                    <center>
                        <table>
                            <tr>
                                <th><label htmlFor="userName"><b>USERNAME :</b></label></th>
                                <td><input type="text" name="userName" value={userName} className="non2" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="email"><b>EMAIL :</b></label></th>
                                <td><input type="email" name="email" value={email} className="non2" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="password"><b>PASSWORD :</b></label></th>
                                <td><input type="password" name="password" value={password} className="non2" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="dob"><b>DATE OF BIRTH :</b></label></th>
                                <td><input type="date" name="dob" id="" value={dob} className="non2" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="phone"><b>PHONE NUMBER :</b></label></th>
                                <td><input type="text" name="phone" value={phone} className="non2" id="" required onChange={handleData}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="gender"><b>GENDER :</b></label></th>
                                <td id='zz2'><input type="radio" name="gender" id="" value="male" onChange={handleData}/>MALE
                                    <input type="radio" name="gender" id="" value="female" onChange={handleData}/>FEMALE
                                </td>
                            </tr>
                            <br/><br />
                            <button id='but2'><b>REGISTER</b></button>     
                        </table>
                    </center>
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default AddAcademyManagerRegister