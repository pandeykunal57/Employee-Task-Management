import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocaStorage, setLocaStorage } from './Utils/localStorage'

const App = () => {
   useEffect(() => {
      setLocaStorage()
      getLocaStorage()
    }, [])
  return (
   
    
    <>
    
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    
    
    
    </>
  )
}


export default App