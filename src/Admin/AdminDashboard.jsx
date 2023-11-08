import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminMainbar from './AdminMainbar'

const AdminDashboard = () => {
  return (
    <>
      <section>
        <article id='art'>
          <AdminSidebar/>
          <AdminMainbar/>
        </article>
      </section>
    </>
  )
}

export default AdminDashboard