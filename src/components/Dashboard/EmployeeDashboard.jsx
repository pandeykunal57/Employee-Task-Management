import React from 'react'
import Header from './Common/Header'
import TaskListNumbers from './Common/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-6 bg-[#1c1c1c] h-screen'>
        <Header/>
        <TaskListNumbers/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard