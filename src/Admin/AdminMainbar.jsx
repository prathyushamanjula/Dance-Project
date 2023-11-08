import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminMainbar = () => {
  return (
    <div id='out'>
       <Outlet/>
    </div>
  )
}

export default AdminMainbar