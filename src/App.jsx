import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocaStorage, setLocaStorage } from './Utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {

    if (email == "admin@g.com" && password == "123")
      setUser("Admin")
    else if (email == "employee@g.com" && password == "123")
      setUser("Employee")
    else
      alert('Invalid')
  }


  return (


    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'Admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}



    </>
  )
}


export default App
