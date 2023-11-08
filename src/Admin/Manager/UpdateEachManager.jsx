import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const UpdateEachManager = () => {
    let navigate=useNavigate();
    let {id} = useParams();
    let token=localStorage.getItem("token")
    let [data,setData]=useState("")
    
    let {userName,email,password,dob,phone,gender}=data;

    useEffect(() => {
        let fetchData = async()=>{
            let {data} = await axiosInstance.get(`/academymanagers/get/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log(data.data);
            setData(data.data);
        }
        fetchData()
    }, []);

    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }
    let handleSubmit= async (e)=>{  
        e.preventDefault();
        let payload={userName,email,password,dob,phone,gender,id}
        console.log(payload)
        let finalData=await axiosInstance.put("/academymanagers/update",payload,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        })
        console.log(finalData);
        toast.success("Updated Successfully",{position: 'top-center'})
        navigate("/adminDashboard/viewAcademyManager")
    }

    return (
        <div id='max'>
            <h1 id='add'><b>UPDATE ACADEMY MANAGER DETAILS</b></h1>
        <div id='aa2'>
            <form action="" onSubmit={handleSubmit}>
                <fieldset id='field2'>
                    <legend id='leg2'><b><i>Update Manager Details</i></b></legend>
                    <br/>
                    <center>
                        <table>
                            <tr>
                                <th><label htmlFor="userName"><b>USERNAME :</b></label></th>
                                <td><input type="text" name="userName" value={userName} className="non" id="" required onChange={handleChange}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="email"><b>EMAIL :</b></label></th>
                                <td><input type="email" name="email" value={email} className="non" id="" required onChange={handleChange}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="password"><b>PASSWORD :</b></label></th>
                                <td><input type="password" name="password"  className="non" id="" required onChange={handleChange}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="dob"><b>DATE OF BIRTH :</b></label></th>
                                <td><input type="date" name="dob" id="" value={dob} className="non" required onChange={handleChange}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="phone"><b>PHONE NUMBER :</b></label></th>
                                <td><input type="text" name="phone" value={phone} className="non" id="" required onChange={handleChange}/></td>
                            </tr><br />
                            <tr>
                                <th><label htmlFor="gender"><b>GENDER :</b></label></th>
                                <td id='zz'><input type="radio" name="gender" id="" value="male" onChange={handleChange}/>MALE
                                    <input type="radio" name="gender" id="" value="female" onChange={handleChange}/>FEMALE
                                </td>
                            </tr>
                            <br/><br />
                            <button id='but2'><b>UPDATE</b></button>     
                        </table>
                    </center>
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default UpdateEachManager