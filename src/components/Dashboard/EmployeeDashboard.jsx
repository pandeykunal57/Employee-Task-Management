import React from 'react'
import Header from './Common/Header'
import TaskListNumbers from './Common/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-6 bg-[#1c1c1c] h-screen'>
        <Header name={props.data.name} changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard