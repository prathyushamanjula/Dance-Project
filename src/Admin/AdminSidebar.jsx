import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <>
            <section id='sect'>
                <article>
                <h2 id='hh'><b><u><i>Admin Dashboard</i></u></b></h2><br/><br/>
                    <ul id='ull'>
                        <li className="li"><Link to="/adminDashboard/addAcademyManager" id='ink'><b><i>Add Academy Manager</i></b></Link></li><br/>
                        <li className="li"><Link to="/adminDashboard/viewAcademyManager" id='ink'><b><i>View Academy Manager</i></b></Link></li><br/>
                        <li className="li"><Link to="/adminDashboard/viewAcademy" id='ink'><b><i>View Academy</i></b></Link></li><br/>
                        <li className="li"><Link to="/adminDashboard/viewBranch" id='ink'><b><i>View Branch</i></b></Link></li><br/>
                        <li className="li"><Link to="/adminDashboard/viewCourse" id='ink'><b><i>View Course</i></b></Link></li><br/>
                        <li className="li"><Link to="/home" id='ink'><b><i>Home</i></b></Link></li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default AdminSidebar