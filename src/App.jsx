import React, { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from "./context/AuthProvider"

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)

 useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser")
  if (!loggedInUser || !userData.length) return

  const parsed = JSON.parse(loggedInUser)

  if (parsed.role === "employee") {
    const emp = userData.find(e => e.id === parsed.id)
    if (emp) {
      setUser("employee")
      setLoggedInUserData(emp) // 🔥 always get latest data
    }
  }

  if (parsed.role === "admin") {
    setUser("admin")
  }
}, [userData]) // 🔥 THIS is the key

  const handleLogin = (email, password) => {
    email = email.trim()
    password = password.trim()

    // Admin login
    if (email === "admin@example.com" && password === "123") {
      setUser("admin")
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      )
      return
    }

    // Employee login
    const employee = userData.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {
      setUser("employee")
      setLoggedInUserData(employee)
     localStorage.setItem(
  "loggedInUser",
  JSON.stringify({ role: "employee", id: employee.id })
)

    } else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.removeItem("loggedInUser")
  }

  return (
  <div className="h-screen overflow-hidden">
    {!user && <Login handleLogin={handleLogin} />}

    {user === "admin" && (
      <AdminDashboard changeUser={handleLogout} />
    )}

    {user === "employee" && (
      <EmployeeDashboard
        changeUser={handleLogout}
        data={loggedInUserData}
      />
    )}
  </div>
)
  
}

export default App
