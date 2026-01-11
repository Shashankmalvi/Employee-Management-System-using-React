import React from "react"
import Header from "../other/Header"
import TaskListNumbers from "../other/TaskNumber"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({ changeUser, data }) => {

  if (!data) {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center">
      Loading...
    </div>
  )
}


  return (
   <div className="p-4 sm:p-6 md:p-10 w-full overflow-x-auto">


      {/* Glass Wrapper */}
      <div className="w-full space-y-6 
                md:max-w-7xl md:mx-auto md:space-y-8
                bg-slate-900/60 backdrop-blur-xl
                border border-indigo-500/20
                rounded-2xl md:rounded-3xl
                p-4 sm:p-6 md:p-8 shadow-xl ">


        <Header changeUser={changeUser} data={data} />

        <TaskListNumbers data={data} />

        <TaskList data={data} />

      </div>
    </div>
  )
}

export default EmployeeDashboard
