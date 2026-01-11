export const updateTaskStatus = (
  employees,
  setEmployees,
  empId,
  taskIndex,
  status
) => {
  const updated = employees.map(emp => {
    if (emp.id !== empId) return emp

    const newTasks = emp.tasks.map((task, i) => {
      if (i !== taskIndex) return task

      return {
        ...task,
        active: status === "active",
        newTask: status === "new",
        completed: status === "completed",
        failed: status === "failed",
      }
    })

    return { ...emp, tasks: newTasks }
  })

  setEmployees(updated)
}
