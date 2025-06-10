import React from 'react'
import Header from './Common/Header'
import CreateTask from './Common/CreateTask'
import AllTasks from './Common/AllTasks'

const AdminDashboard = () => {
	return (
		 <div className='p-6' >
			<Header />
			<CreateTask/>
			<AllTasks/>

		</div>
	)
}

export default AdminDashboard