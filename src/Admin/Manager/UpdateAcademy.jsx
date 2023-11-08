import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosInstance from '../../Helpers/AxiosInstance';
import { useEffect, useState } from 'react';

const UpdateAcademy = () => {
    let {id}=useParams();
    let token=localStorage.getItem("token");
    let navigate=useNavigate()
    let [data,setData]=useState({
        academyName:"",
        description:"",
        email:"",
        contact:""
    })
    let { academyName, description, email, contact } = data;

    useEffect(() => {
        let fetchData = async()=> {
            let { data } = await axiosInstance.get(`/academies/get/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data.data);
            setData(data.data);
        };
        fetchData();    
    }, []);

    let handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setData({...data, [name]:value});
    }

    let handleSubmit=async(e)=>{
        e.preventDefault();
        let payload={academyName, description, email, contact,  id}
        let finalData=await axiosInstance.put("/academies/update", payload,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        })
        console.log(finalData);
        toast.success("Updated Successfully",{position: 'top-center'})
        navigate("/adminDashboard/viewAcademy")
    }

    return (
        <div id='div01'>
            <h1 id='add'><b>UPDATE ACADEMY DETAILS</b></h1>
        <div id='div02'>
            <form action='' onSubmit={handleSubmit}>
                <fieldset id='div03'>
                <legend id='leg'><b><i>Update Academy Details</i></b></legend>
                <br />
                <table>
                    <tr>
                        <th><label htmlFor="academyName"><b>ACADEMY NAME :</b></label></th>
                        <td><input type="text" name="academyName" id="" className="non" value={academyName} onChange={handleChange}/></td>
                    </tr>
                    <br />
                    <tr>
                        <th><label htmlFor="description"><b>DESCRIPTION :</b></label></th>
                        <td><input type="text" name="description" id="" className="non" value={description} onChange={handleChange}/></td>
                    </tr>
                    <br />
                    <tr>
                        <th><label htmlFor="email"><b>EMAIL :</b></label></th>
                        <td><input type="email" name="email" id="" className="non" value={email} onChange={handleChange}/></td>
                    </tr>
                    <br />
                    <tr>
                        <th><label htmlFor="contact"><b>CONTACT :</b></label></th>
                        <td><input type="phone" name="contact" id="" className="non" value={contact} onChange={handleChange}/></td>
                    </tr>
                    <br/><br/>
                    <button id='but000'><b>UPDATE</b></button>
                </table>
                </fieldset>
            </form>
        </div>
        </div>
    )
}

export default UpdateAcademy