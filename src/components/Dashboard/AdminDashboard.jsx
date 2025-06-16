import React from 'react'
import Header from './Common/Header'
import CreateTask from './Common/CreateTask'
import AllTasks from './Common/AllTasks'

const AdminDashboard = (props) => {
	return (
		 <div className='p-6' >
			<Header changeUser={props.changeUser}/>
			<CreateTask/>
			<AllTasks/>

		</div>
	)
}

export default AdminDashboard