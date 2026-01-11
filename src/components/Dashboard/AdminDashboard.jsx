import React from 'react'
import HeaderAdmin from '../other/HeaderAdmin'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({changeUser}) => {
  return (
    <div className="h-screen overflow-auto ">

  {/* Fixed Header */}
  <div className="h-[72px] sticky top-0 z-50">
    <HeaderAdmin  handleLogout={changeUser}  />
  </div>

  {/* Scrollable Content */}
  <div className="h-[calc(100vh-72px)] overflow-y-auto px-4 sm:px-6 py-4">
    <div className="max-w-7xl mx-auto space-y-6">
      <CreateTask />
      <AllTask />
    </div>
  </div>

</div>

  )
}

export default AdminDashboard

