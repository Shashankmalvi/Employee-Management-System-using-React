import React, { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const localData = getLocalStorage()

    if (!localData?.employees || localData.employees.length === 0) {
      setLocalStorage()
    }

    const { employees } = getLocalStorage()
    setUserData(employees)
    setLoaded(true) // ✅ mark load complete
  }, [])

  useEffect(() => {
    if (loaded && userData.length > 0) {
      localStorage.setItem(
        "employees",
        JSON.stringify(userData)
      )
    }
  }, [userData, loaded])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider
