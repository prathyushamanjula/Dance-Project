import React from 'react'
import './Global.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import Gallery from './Components/Pages/Gallery'
import ProtectedRoute from './ServiceRoutes/ProtectedRoute';
import AdminRegister from './Admin/AdminRegister';
import AdminDashboard from './Admin/AdminDashboard';
import AdminMainbar from './Admin/AdminMainbar';
import AdminSidebar from './Admin/AdminSidebar';
import AddAcademyManagerRegister from './Admin/Manager/AddAcademyManagerRegister';
import ViewAcademyManager from './Admin/Manager/ViewAcademyManager';
import ViewAcademy from './Admin/Manager/ViewAcademy';
import ViewBranch from './Admin/Manager/ViewBranch';
import ViewCourse from './Admin/Manager/ViewCourse';
import EachAcademyManager from './Admin/Manager/EachAcademyManager';
import UpdateEachManager from './Admin/Manager/UpdateEachManager';
import AddAcademy from './Admin/Manager/AddAcademy';
import UpdateAcademy from './Admin/Manager/UpdateAcademy';
import AddBranch from './Admin/Manager/AddBranch';
import UpdateBranch from './Admin/Manager/UpdateBranch';
import AddCourses from './Admin/Manager/AddCourses';
import UpdateCourse from './Admin/Manager/UpdateCourse';

const App=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
        <ToastContainer/>
            <Routes>
                <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/adminRegister' element={<AdminRegister/>}/>
                <Route path='/adminDashboard' element={<AdminDashboard/>}/>
                <Route path='/adminMainbar' element={<AdminMainbar/>}/>
                <Route path='/adminSidebar' element={<AdminSidebar/>}/>
                <Route path='/adminDashboard' element={<AdminDashboard/>}>
                    <Route path="/adminDashboard/addAcademyManager" element={<AddAcademyManagerRegister/>}/>
                    <Route path="/adminDashboard/viewAcademyManager" element={<ViewAcademyManager/>}/>
                    <Route path="/adminDashboard/viewAcademyManager/eachAcademyManager/:id" element={<EachAcademyManager/>}/>
                    <Route path="/adminDashboard/viewAcademyManager/updateEachManager/:id" element={<UpdateEachManager/>}/>
                    <Route path="/adminDashboard/viewAcademyManager/addAcademy/:id" element={<AddAcademy/>}/>
                    <Route path="/adminDashboard/viewAcademy" element={<ViewAcademy/>}/>
                    <Route path="/adminDashboard/viewAcademy/updateAcademy/:id" element={<UpdateAcademy/>}/>
                    <Route path="/adminDashboard/viewBranch" element={<ViewBranch/>}/>
                    <Route path="/adminDashboard/viewAcademy/addBranch/:id" element={<AddBranch/>}/>
                    <Route path="/adminDashboard/viewBranch/updateBranch/:id" element={<UpdateBranch/>}/>
                    <Route path="/adminDashboard/viewBranch/addCourses/:id" element={<AddCourses/>}/>
                    <Route path="/adminDashboard/viewCourse" element={<ViewCourse/>}/>
                    <Route path="/adminDashboard/viewCourse/updateCourse/:id" element={<UpdateCourse/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App