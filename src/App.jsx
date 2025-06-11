import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocaStorage, setLocaStorage } from './Utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState()
  const authData = useContext(AuthContext)
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])


  const handleLogin = (email, password) => {

    if (email == "admin@g.com" && password == "123") {
      setUser('Admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const employee=authData.employees.find((e) => email == e.email && e.password == password)
      if (employee){
      setUser('Employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
    }
  }
    else
      alert('Invalid')
  }


  return (


    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'Admin' ? <AdminDashboard /> : (user== 'Employee' ? <EmployeeDashboard data={LoggedInUserData} />:null)}
      



    </>
  )
}


export default App
