import React from "react"
import AcceptTask from "./AcceptTask"
import NewTask from "./NewTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"

const TaskList = ({ data }) => {
  return (
    <div
      className="
        grid grid-cols-1 gap-4 mt-6
        md:flex md:gap-5 md:mt-10
        md:overflow-x-auto md:pb-4
        no-scrollbar
      "
    >
      {data.tasks.map((task, idx) => {
        if (task.newTask)
          return <NewTask key={idx} data={task} index={idx} empId={data.id} />

        if (task.active)
          return <AcceptTask key={idx} data={task} index={idx} empId={data.id} />

        if (task.completed)
          return <CompleteTask key={idx} data={task} />

        if (task.failed)
          return <FailedTask key={idx} data={task} />
        
        return null
      })}
    </div>
  )
}

export default TaskList
