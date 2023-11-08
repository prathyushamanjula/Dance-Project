import React from 'react';
import axiosInstance from '../../Helpers/AxiosInstance';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EachAcademyManager = () => {
    let [managerData,setmanagerData]=useState([])
    let token=localStorage.getItem("token");
    let {id}=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            })
            setmanagerData(data.data)
        }
        fetchData()
    },[])   

    let handleDelete=(id)=>{
        axiosInstance.delete(`/academymanagers/delete/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        toast.success("Deleted Successfully",{position: 'top-center'})
        window.location.assign("/adminDashboard/viewAcademyManager")
    }

    return (
        <div id='head'>
            <div>
                <h1 id='add'>EACH MANAGER DETAILS</h1>
            </div>
            <center id='cen'>
                <div id='rect'>
                    <h1>{managerData.userName}</h1>
                    {/* <h1>{managerData.role}</h1> */}
                    <h1>{managerData.email}</h1>
                    <h1>{managerData.password}</h1>
                    <h1>{managerData.dob}</h1>
                    <h1>{managerData.phone}</h1>
                    <h1>{managerData.gender}</h1><br/>
                    <div id='but00'>
                        <button id='but01'><b><Link to={`/adminDashboard/viewAcademyManager/updateEachManager/${managerData.id}`} id='link'>UPDATE</Link></b></button>
                        <button id='but02'><b><Link to={`/adminDashboard/viewAcademyManager/addAcademy/${managerData.id}`} id='link'>ADD ACADEMY</Link></b></button>
                        <button id='but03' onClick={()=>{handleDelete(managerData.id)}}><b>DELETE</b></button>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default EachAcademyManager