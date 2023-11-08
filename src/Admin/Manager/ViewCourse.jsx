import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import {  useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'

const ViewCourse = () => {
  let [course,setCourse]=useState([])
  let token=localStorage.getItem("token");
  let {id}=useParams()
  console.log(id);

  let handleDelete=(id)=>{
    axiosInstance.delete(`/dancecourses/delete/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`,
        }
    })
        alert("deleted successfully");
        window.location.assign("/adminDashboard/viewCourse")
    }

    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get("/dancecourses/getall",{
                headers:{
                    Authorization:`Bearer ${token}`,
                },  
            })
            console.log(data.data);
            setCourse(data.data)
        }
        fetchData()
    },[])

    return (
        <div>
        <h1 id='aca'><b>DANCE COUSRE DETAILS</b></h1>
        <div id='back'>
            <table id='tab' border={4} cellPadding={4} cellSpacing={2}>
                <tr>
                    <th>DANCE TYPE</th>
                    <th>COURSE DURATION</th>
                    <th>FEE</th>
                    <th>UPDATE COURSES</th>
                    <th>DELETE COURSES</th>
                </tr>
                {course.map((x,i)=>{
                    return(
                        <tr key={i}>
                            <td>{x.type}</td>
                            <td>{x.courseDurationInMonths}</td>
                            <td>{x.fee}</td>
                            <td><button id='kk'><Link to={`/adminDashboard/viewCourse/updateCourse/${x.id}`}><b>UPDATE</b></Link></button></td>
                            <td><button id='kk' onClick={() => { handleDelete(x.id)}}><Link><b>DELETE</b></Link></button></td>
                        </tr>
                    )                    
                })}
            </table>
        </div>
        </div>
  )
}

export default ViewCourse