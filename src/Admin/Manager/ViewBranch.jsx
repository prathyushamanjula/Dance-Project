import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance';
import { Link } from 'react-router-dom';
import { useEffect ,useState } from 'react';
// import { toast } from 'react-toastify';

const ViewBranch = () => {
    let [users, setUsers] = useState([]);
    let token = localStorage.getItem("token");
    useEffect(() => {
        let fetchData = async()=> {
            let { data } = await axiosInstance.get("/branches/getall", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data.data);
            setUsers(data.data);
        };
        fetchData()
    }, [])

    let handleDelete=(x)=>{
        axiosInstance.delete(`/branches/delete/${x}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        // toast.success("Deleted Successfully",{position: 'top-center'})
        alert("Deleted Successfully")
        window.location.assign("/adminDashboard/viewBranch")
    }
  
    return (
        <div>
        <h1 id='aca'><b>BRANCH DETAILS</b></h1>
        <div id='back'>
            <table id='tab' border={4} cellPadding={4} cellSpacing={2}>
                <tr>
                    <th>ADDRESS</th>
                    <th>CITY</th>
                    <th>CANTACT NUMBER</th>
                    <th>PINCODE</th>
                    <th>UPDATE BRANCH</th>
                    <th>ADD COURSES</th>
                    <th>DELETE BRANCH</th>
                </tr>
                {users.map((branchData,i)=>{
                    return(
                        <tr key={i}>
                            <td>{branchData.address}</td>
                            <td>{branchData.city}</td>
                            <td>{branchData.phone}</td>
                            <td>{branchData.pincode}</td>
                            <td>
                                <button id='kk'><Link to={`/adminDashboard/viewBranch/updateBranch/${branchData.id}`}><b>UPDATE</b></Link></button>
                            </td>
                            <td>
                                <button id='kk'><Link to={`/adminDashboard/viewBranch/addCourses/${branchData.id}`}><b>ADD COURSES</b></Link></button>
                            </td>                                                                                                                
                            <td>
                                <button id='kk'onClick={()=>{handleDelete(branchData.id)}}><Link><b>DELETE</b></Link></button> 
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
        </div>
    )
}

export default ViewBranch