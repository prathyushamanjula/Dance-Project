import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ViewAcademyManager = () => {
    let [managerData,setmanagerData]=useState([])
    let token=localStorage.getItem("token")
    let {id}=useParams()
    console.log(id);
        useEffect(()=>{
            let fetchData=async()=>{
                let {data}=await axiosInstance.get(`/academymanagers/getall`,{
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                })
                setmanagerData(data.data)
            }
            fetchData()
        },[])
    return (
        <div id='heading'>
            <div>
                <h1 id='add'><b>ACADEMY MANAGER DETAILS</b></h1>
            </div>
            <div id='block'>
                {managerData.map((x)=>{
                    return(
                    <div id='card'>
                        <h1>{x.userName}</h1>
                        {/* <h1>{x.role}</h1> */}
                        <h1>{x.email}</h1>
                        <h1>{x.password}</h1>
                        <h1>{x.dob}</h1>
                        <h1>{x.phone}</h1>
                        <h1>{x.gender}</h1><br/>
                        <div>
                            <button id='but001'><Link to={`/adminDashboard/viewAcademyManager/eachAcademyManager/${x.id}`}><b>VIEW</b></Link></button>
                        </div>
                    </div>
                    )
                })}
            </div>      
        </div>
    )
}

export default ViewAcademyManager