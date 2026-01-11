import React from "react"

const TaskNumber = ({ data }) => {
  if (!data?.tasks) return null

  const counts = {
    newTask: data.tasks.filter(t => t.newTask).length,
    active: data.tasks.filter(t => t.active).length,
    completed: data.tasks.filter(t => t.completed).length,
    failed: data.tasks.filter(t => t.failed).length,
  }

  return (
    <div className="grid grid-cols-2 gap-3 mt-6
                    md:grid-cols-4 md:gap-6">

      {/* New Task */}
      <div className="bg-blue-400 rounded-xl
                      flex flex-col items-center justify-center
                      p-3 sm:p-4
                      min-h-[90px] md:min-h-[120px]">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
          {counts.newTask}
        </h2>
        <h3 className="text-xs sm:text-sm md:text-lg font-medium mt-1">
          New Task
        </h3>
      </div>

      {/* Completed */}
      <div className="bg-green-400 rounded-xl
                      flex flex-col items-center justify-center
                      p-3 sm:p-4
                      min-h-[90px] md:min-h-[120px]">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
          {counts.completed}
        </h2>
        <h3 className="text-xs sm:text-sm md:text-lg font-medium mt-1">
          Completed
        </h3>
      </div>

      {/* Accepted */}
      <div className="bg-yellow-400 text-black rounded-xl
                      flex flex-col items-center justify-center
                      p-3 sm:p-4
                      min-h-[90px] md:min-h-[120px]">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
          {counts.active}
        </h2>
        <h3 className="text-xs sm:text-sm md:text-lg font-medium mt-1">
          Accepted
        </h3>
      </div>

      {/* Failed */}
      <div className="bg-red-400 rounded-xl
                      flex flex-col items-center justify-center
                      p-3 sm:p-4
                      min-h-[90px] md:min-h-[120px]">
        <h2 className="text-lg sm:text-xl md:text-3xl font-bold">
          {counts.failed}
        </h2>
        <h3 className="text-xs sm:text-sm md:text-lg font-medium mt-1">
          Failed
        </h3>
      </div>

    </div>
  )
}

export default TaskNumber
