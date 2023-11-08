import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axiosInstance from '../../Helpers/AxiosInstance';

const UpdateCourse = () => {
    let {id}=useParams();
    console.log(id);
    let token=localStorage.getItem("token")
    let navigate=useNavigate();
    let [course,setCourse]=useState({
        name: "",
        type: "",
        courseDurationInMonths: "",
        fee: "",
        image: ""
    });

    let { courseDurationInMonths, fee, name, image, type } = course;
    let handleChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       setCourse({ ...course, [name]: value });
    };

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get(`/dancecourses/get/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCourse(data.data);
        };
        fetchData();
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault()
        let payload = { courseDurationInMonths, fee, image, name,type };
        let finalData = await axiosInstance.put(`/dancecourses/update/${id}`,payload,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(finalData);
        alert("Sucessfully Updated Your Courses");
        navigate("/adminDashboard/viewCourse");
    };

    return (
        <div>
            <h1 id='add'><b>UPDATE COURSE</b></h1>
            <div id='div022'>
            <form action='' onSubmit={handleSubmit}>
                <fieldset id='div033'>
                <legend id='leg'><b><i>Update Course Details</i></b></legend>
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

export default UpdateCourse