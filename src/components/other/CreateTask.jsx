import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
  e.preventDefault()

  const task = {
    taskTitle: taskTitle,
    taskDescription: taskDescription,
    taskDate: taskDate,
    category,
    newTask: true,
    active: false,
    completed: false,
    failed: false,
  }

  // ✅ DECLARE FIRST
  const updatedUsers = userData.map(user => {
    if (user.firstName.toLowerCase() === asignTo.toLowerCase()) {
      return {
        ...user,
        tasks: [...user.tasks, task]
      }
    }
    return user
  })

  // ✅ USE AFTER DECLARATION
  setUserData(updatedUsers)

  // reset form
  setTaskTitle('')
  setCategory('')
  setAsignTo('')
  setTaskDate('')
  setTaskDescription('')
}


  return (
    <div className="mt-8 bg-slate-800/80 backdrop-blur-xl
                    border border-indigo-500/30 rounded-2xl
                    p-6 shadow-lg">

      <h2 className="text-xl font-semibold text-slate-100 mb-6">
        Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-col md:flex-row w-full gap-6"
      >

        {/* Left */}
        <div className="w-full md:w-[48%] space-y-4">

          <div>
            <label className="text-sm text-slate-300">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full mt-1 rounded-lg px-3 py-2
                         bg-slate-900 border border-slate-600
                         text-slate-100 placeholder-slate-400
                         focus:border-indigo-500
                         focus:ring-1 focus:ring-indigo-500 outline-none"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300 white">Due Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className=" w-full mt-1 rounded-lg px-3 py-2
                         bg-slate-900 border border-slate-600
                         text-slate-100
                         focus:border-indigo-500
                         focus:ring-1 focus:ring-indigo-500 outline-none"
              type="date"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="w-full mt-1 rounded-lg px-3 py-2
                         bg-slate-900 border border-slate-600
                         text-slate-100 placeholder-slate-400
                         focus:border-indigo-500
                         focus:ring-1 focus:ring-indigo-500 outline-none"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 rounded-lg px-3 py-2
                         bg-slate-900 border border-slate-600
                         text-slate-100 placeholder-slate-400
                         focus:border-indigo-500
                         focus:ring-1 focus:ring-indigo-500 outline-none"
              type="text"
              placeholder="Design, Dev, QA"
            />
          </div>

        </div>

        {/* Right */}
        <div className="w-full md:w-[48%] flex flex-col">

          <label className="text-sm text-slate-300">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="mt-1 h-44 rounded-lg px-4 py-2
                       bg-slate-900 border border-slate-600
                       text-slate-100 placeholder-slate-400
                       focus:border-indigo-500
                       focus:ring-1 focus:ring-indigo-500
                       outline-none resize-none"
            placeholder="Describe the task in detail..."
          />

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-xl text-white font-medium
                       bg-gradient-to-r from-indigo-500 to-sky-500
                       hover:scale-[1.02] hover:shadow-lg
                       transition-all"
          >
            Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask
