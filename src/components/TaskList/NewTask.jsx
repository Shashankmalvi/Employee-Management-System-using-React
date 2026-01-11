import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"
import { updateTaskStatus } from "../../utils/updateTaskStatus"

const NewTask = ({ data, index, empId }) => {
  const [employees, setEmployees] = useContext(AuthContext)

  return (
    <div className="w-full md:w-[300px]
                    p-4 sm:p-5
                    bg-blue-400 rounded-xl">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-xs px-2 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-xs">{data.taskDate}</h4>
      </div>

      <h2 className="mt-4 text-lg sm:text-xl font-semibold">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>

      <div className="mt-5">
        <button
          onClick={() =>
            updateTaskStatus(employees, setEmployees, empId, index, "active")
          }
          className="w-full bg-blue-600 px-3 py-2 text-sm rounded-lg font-medium"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
