import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import axiosInstance from '../../Helpers/AxiosInstance';
import { useState } from 'react';

const AddCourses = () => {
    let navigate = useNavigate();
    let token = localStorage.getItem("token");
    let {id} =useParams()
    let [data, setData] = useState({
        name: "",
        type:"",
        courseDurationInMonths: "",
        fee: "",
        image: ""
    });
    let {name,type,courseDurationInMonths,fee,image}=data

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault()
        let payload = { name, type, courseDurationInMonths, fee, image };
        let finalData = await axiosInstance.post(`/dancecourses/save?branchid=${id}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(finalData);
        toast.success("Added Successfully",{position: 'top-center'})
        navigate("/adminDashboard/viewCourse");
    };

    return (
        <div>
            <h1 id='add'><b>ADD COURSES</b></h1>
            <div id='div022'>
            <form action='' onSubmit={handleSubmit}>
                <fieldset id='div033'>
                <legend id='leg'><b><i>Add Course Details</i></b></legend>
                <br />
                <table>
                    <tr>
                        <th><label htmlFor="name"><b>NAME:</b></label></th>
                        <td><input type="text" name="name" id="" className="non" value={name} onChange={handleChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <th><label htmlFor="type"><b>TYPE:</b></label></th>
                        <td><input type="text" name="type" id="" className="non" value={type} onChange={handleChange}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <th><label htmlFor="courseDurationInMonths"><b>COURSE DURATION :</b></label></th>
                        <td><input type="text" name="courseDurationInMonths" id="" className="non" value={courseDurationInMonths} onChange={handleChange}/></td>
                    </tr>
                    <br />
                    <tr>
                        <th><label htmlFor="fee"><b>FEE :</b></label></th>
                        <td><input type="number" name="fee" id="" className="non" value={fee} onChange={handleChange}/></td>
                    </tr>
                    <br />
                    <tr>
                        <th><label htmlFor="image"><b>IMAGE DATA :</b></label></th>
                        <td><input type="text" name="image" id="" className="non" value={image} onChange={handleChange}/></td>
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

export default AddCourses