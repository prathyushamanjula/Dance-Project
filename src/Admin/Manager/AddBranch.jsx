import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useState } from 'react';

const AddBranch = () => {
    let navigate = useNavigate();
    let token = localStorage.getItem("token");
    let {id} =useParams()
    let [data, setData] = useState({
        address: "",
        city: "",
        phone: "",
        pincode: ""
    })
    let { address, city, phone, pincode } = data;
    
    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });
    };
    
    let handleSubmit = async(e)=> {
        e.preventDefault()
        let payload = { address, city, phone, pincode };
        let finalData = await axiosInstance.post(`/branches/save?aid=${id}`,payload,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(finalData); 
        toast.success("Added Successfully",{position: 'top-center'})
        navigate("/adminDashboard/viewBranch");
    };

    return (
        <div>
            <h1 id='add'><b>ADD BRANCH DETAILS</b></h1>
            <div id='div02'>
            <form action='' onSubmit={handleSubmit}>
                <fieldset id='div03'>
                <legend id='leg'><b><i>Add Branch Details</i></b></legend>
                <br/>
                <table>
                    <tr>
                        <th><label htmlFor="address"><b>ADDRESS :</b></label></th>
                        <td><input type="text" name="address" id="" className="non" value={address} onChange={handleChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <th><label htmlFor="city"><b>CITY :</b></label></th>
                        <td><input type="text" name="city" id="" className="non" value={city} onChange={handleChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <th><label htmlFor="phone"><b>CONTACT NUMBER :</b></label></th>
                        <td><input type="phone" name="phone" id="" className="non" value={phone} onChange={handleChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <th><label htmlFor="pincode"><b>PINCODE :</b></label></th>
                        <td><input type="number" name="pincode" id="" className="non" value={pincode} onChange={handleChange}/></td>
                    </tr>
                    <br/><br/>
                    <button id='but000'><b>SUBMIT</b></button>
                </table>
                </fieldset>
            </form>
            </div>
        </div>
    )
}

export default AddBranch