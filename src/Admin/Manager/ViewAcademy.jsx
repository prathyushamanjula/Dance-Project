import React, { useState } from 'react'
import axiosInstance from '../../Helpers/AxiosInstance';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { toast } from 'react-toastify';

const ViewAcademy = () => {
    let [users,setUsers] = useState([]);
    let token = localStorage.getItem('token')
    useEffect(() => {
        let fetchData = async()=>{
            let {data} = await axiosInstance.get('/academies/getall',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data.data);
            setUsers(data.data)
        } 
        fetchData()       
    }, []);
    
    let handleDelete=(x)=>{
        axiosInstance.delete(`/academies/delete/${x}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        // toast.success("Deleted Successfully",{position: 'top-center'})
        alert("Deleted Successfully")
        window.location.assign("/adminDashboard/viewAcademy")
    }

    return (
        <div>
        <h1 id='aca'><b>ACADEMY DETAILS</b></h1>
        <div id='back'>
            <table id='tab' border={2} cellPadding={4} cellSpacing={2}>
                <tr>
                    <th>ACADEMY NAME</th>
                    <th>DESCRIPTION</th>
                    <th>EMAIL ID</th>
                    <th>CANTACT NUMBER</th>
                    <th>UPDATE ACADEMY</th>
                    <th>ADD BRANCH</th>
                    <th>DELETE ACADEMY</th>
                </tr>
                {users.map((academyData,i)=>{
                    return(
                        <tr key={i}>
                            <td>{academyData.academyName}</td>
                            <td>{academyData.description}</td>
                            <td>{academyData.email}</td>
                            <td>{academyData.contact}</td>
                            <td>
                                <button id='kk'><Link to={`/adminDashboard/viewAcademy/updateAcademy/${academyData.id}`}><b>UPDATE</b></Link></button>
                            </td>
                            <td>
                                <button id='kk'><Link to={`/adminDashboard/viewAcademy/addBranch/${academyData.id}`}><b>ADD BRANCH</b></Link></button>
                            </td>                                                                                                                
                            <td>
                                <button id='kk' onClick={()=>{handleDelete(academyData.id)}}><Link><b>DELETE</b></Link></button> 
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </div>
    )
}

export default ViewAcademy