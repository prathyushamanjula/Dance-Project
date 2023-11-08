import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosInstance from '../../Helpers/AxiosInstance';
import { useEffect, useState } from 'react';

const UpdateBranch = () => {
    let {id}=useParams();
    let token=localStorage.getItem("token");
    let navigate=useNavigate()
    let [data,setData]=useState({
        address:"",
        city:"",
        phone:"",
        pincode:""
    });
    let { address, city, phone, pincode } = data;

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get(`/branches/get/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
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
        let payload={address, city, phone, pincode,id}
        let finalData=await axiosInstance.put(`/branches/update/${id}`, payload,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        })
        console.log(finalData);
        toast.success("Updated Successfully",{position: 'top-center'})
        navigate("/adminDashboard/viewBranch")
    }

    return (
        <div id='div01'>
            <h1 id='add'><b>UPDATE BRANCH</b></h1>
        <div id='div02'>
        <form action='' onSubmit={handleSubmit}>
            <fieldset id='div03'>
            <legend id='leg'><b><i>Update Branch Details</i></b></legend>
            <br />
            <table>
                <tr>
                    <th><label htmlFor="address"><b>ADDRESS :</b></label></th>
                    <td><input type="text" name="address" id="" className="non" value={address} onChange={handleChange}/></td>
                </tr>
                <br />
                <tr>
                    <th><label htmlFor="city"><b>CITY :</b></label></th>
                    <td><input type="text" name="city" id="" className="non" value={city} onChange={handleChange}/></td>
                </tr>
                <br />
                <tr>
                    <th><label htmlFor="phone"><b>CONTACT NUMBER :</b></label></th>
                    <td><input type="phone" name="phone" id="" className="non" value={phone} onChange={handleChange}/></td>
                </tr>
                <br />
                <tr>
                    <th><label htmlFor="pincode"><b>PINCODE :</b></label></th>
                    <td><input type="number" name="pincode" id="" className="non" value={pincode} onChange={handleChange}/></td>
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

export default UpdateBranch