import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData] = useContext(AuthContext)

  return (
    <div className="bg-slate-800/80 backdrop-blur-xl p-6 rounded-2xl mt-8
                    border border-slate-700 shadow-lg">

      {/* Header Row */}
      <div className="hidden md:flex bg-gradient-to-r from-indigo-500 to-sky-500
                mb-4 py-3 px-4 justify-between rounded-xl text-white">


        <h2 className="text-lg font-semibold w-1/5">Employee</h2>
        <h3 className="text-lg font-semibold w-1/5 text-center">New</h3>
        <h5 className="text-lg font-semibold w-1/5 text-center">Active</h5>
        <h5 className="text-lg font-semibold w-1/5 text-center">Completed</h5>
        <h5 className="text-lg font-semibold w-1/5 text-center">Failed</h5>
      </div>

      {/* Data Rows */}
      <div className="space-y-3">

        {userData.map((elem, idx) => {

          const counts = {
            newTask: elem.tasks.length,
            active: elem.tasks.filter(t => t.active).length,
            completed: elem.tasks.filter(t => t.completed).length,
            failed: elem.tasks.filter(t => t.failed).length,
          }

          return (
           <div
  key={idx}
  className="bg-slate-900/70 border border-slate-700
             py-4 px-4 flex flex-col md:flex-row
             gap-3 md:gap-0
             md:justify-between md:items-center
             rounded-xl hover:bg-slate-700/40 transition"
>

              <h2 className="text-lg font-medium md:w-1/5 text-slate-100">
  <span className="md:hidden text-slate-400 mr-2">Employee:</span>
  {elem.firstName}
</h2>


              <h3 className="text-lg font-medium md:w-1/5 text-sky-400">
  <span className="md:hidden text-slate-400 mr-2">New:</span>
  {counts.newTask}
</h3>


       <h5 className="text-lg font-medium md:w-1/5 text-amber-400">
  <span className="md:hidden text-slate-400 mr-2">Active:</span>
  {counts.active}
</h5>

<h5 className="text-lg font-medium md:w-1/5 text-emerald-400">
  <span className="md:hidden text-slate-400 mr-2">Completed:</span>
  {counts.completed}
</h5>

<h5 className="text-lg font-medium md:w-1/5 text-rose-400">
  <span className="md:hidden text-slate-400 mr-2">Failed:</span>
  {counts.failed}
</h5>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default AllTask
